
function OnTriggerEnter (other : Collider) {
    if( other.name == "Ball" ) {
    	other.rigidbody.velocity = Vector3(0,0,0);
    }
}