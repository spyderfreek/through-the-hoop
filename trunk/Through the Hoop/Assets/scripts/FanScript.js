var ballTransform:Transform;
var ball:GameObject;
var inTrigger:boolean;

function start(){
    inTrigger = false;
}

function FixedUpdate(){

    if(inTrigger){
        var myTransform:Transform = gameObject.GetComponent("Transform");
 		Debug.Log("My fan position is "+ballTransform.position);
    	Debug.Log("My position is "+myTransform.position);
    
    	//compare relative positions and angle between ball position and fan force
    	var ballDirection =  ballTransform.position - myTransform.position;
		var AngleBetween = Vector3.Angle(Vector3.up, ballDirection);
		Debug.Log(ballDirection + " , " + AngleBetween);
	
		var ballDistance = Vector3.Distance(myTransform.position,ballTransform.position);
		Debug.Log(ballDistance);
		if( ballDistance < 5.0 && AngleBetween < 30.0 ){
			ball.GetComponent("Rigidbody").AddForce(ballDirection * ( 10.0 - ballDistance));
			Debug.Log("In Wind");
		}       
 
    }
}

function OnTriggerEnter (other : Collider) {

    inTrigger = true;
    
    ball = other.gameObject;
    ballTransform = other.transform;
}

function onTriggerExit(other : Collider){
	inTrigger = false;

	
}