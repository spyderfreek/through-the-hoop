var attractionCoeff: float = 2.0;
var cutoffDistance: float = 4.0;
private var script: ShootAndReceiveBall = null;
private var ballInRange : boolean = false; 

function Start(){
    //audio.Play();
	script = GameObject.Find( "BallStart" ).GetComponent(ShootAndReceiveBall);
	gameObject.GetComponent(SphereCollider).radius = cutoffDistance;
}

function OnTriggerEnter( other : Collider ) {
	if( other.name == "Ball(Clone)" ) {
		audio.Play(0);
		ballInRange = true;
	}
}

function OnTriggerExit( other : Collider ) {
	if( other.name == "Ball(Clone)" ) {
		audio.Stop();
		ballInRange = false;
	}
}

function FixedUpdate () {
	var ball: GameObject = script.goBall;
	if( ballInRange && ball != null ) {
		
         //Debug.Log("in ball");
         var ballTransform:Transform = ball.transform;
         var myTransform:Transform = gameObject.transform;
     
         var distance:float = Vector3.Distance(ballTransform.position, myTransform.position);
         //Debug.Log(distance);
     
     	ball.rigidbody.AddForce(( myTransform.position - ballTransform.position )*(attractionCoeff/(distance*distance)));
     	audio.volume = 3.0*(1.0 - distance / cutoffDistance);
     }
}