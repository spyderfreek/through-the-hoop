var ballTransform:Transform;
var ball:GameObject;
var inTrigger:boolean;


function start(){
    inTrigger = false;
}

function FixedUpdate(){

    if(inTrigger){
        var myTransform:Transform = gameObject.GetComponent("Transform");
 		////Debug.Log("My fan position is "+ballTransform.position);
    	//Debug.Log("My position is "+myTransform.position);
    
    	//compare relative positions and angle between ball position and fan force
    	var ballDirection =  ballTransform.position - myTransform.position;
    	ballDirection = Vector3(ballDirection.x,ballDirection.y,-2);
		//var AngleBetween = Vector3.Angle(Vector3.up, ballDirection);
		//Debug.Log(ballDirection + " , " + AngleBetween);
	
		var ballDistance = Vector3.Distance(myTransform.position,ballTransform.position);
		//Debug.Log(ballDistance);
		if( ballDistance < 5.0 ){
			ball.GetComponent("Rigidbody").AddForce(ballDirection * ( 16.5 - ballDistance));
			//Debug.Log("In Wind");
		}       
 
    }
}

function OnTriggerEnter (other : Collider) {

    inTrigger = true;
    Debug.Log("in trigger");
    
    ball = other.gameObject;
    ballTransform = other.transform;
}

function onTriggerExit(other : Collider){
	inTrigger = false;
	
	Debug.Log("out of trigger");

	
}