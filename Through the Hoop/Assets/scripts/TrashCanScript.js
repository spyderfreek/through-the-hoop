var suckForceScale:float = 3.0f;

function OnTriggerEnter(other:Collider){
    audio.Play();

}

function OnTriggerStay (other : Collider) {
    if( other.name == "Ball(Clone)" ) {
    	GameObject.Find( "BallStart" ).GetComponent( ShootAndReceiveBall ).Init();
    }
}