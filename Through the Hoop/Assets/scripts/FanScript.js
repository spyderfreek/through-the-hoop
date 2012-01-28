private var ball:GameObject;



function start(){
    
}

function OnTriggerStay (other : Collider) {
    ball = other.gameObject;
    ballTransform = other.transform;
    
    var myTransform:Transform = gameObject.GetComponent("Transform");
 		////Debug.Log("My fan position is "+ballTransform.position);
    	//Debug.Log("My position is "+myTransform.position);
    
    	//compare relative positions and angle between ball position and fan force
    	//var ballDirection =  ballTransform.position - myTransform.position;
    	var ballDirection = -myTransform.up;
    	ballDirection = Vector3(ballDirection.x,ballDirection.y,-2);
		//var AngleBetween = Vector3.Angle(Vector3.up, ballDirection);
		//Debug.Log(ballDirection + " , " + AngleBetween);
	
		var ballDistance = Vector3.Distance(myTransform.position,ballTransform.position);
		//Debug.Log(ballDistance);
	
			ball.GetComponent("Rigidbody").AddForce(ballDirection * ( 50 - ballDistance));
	
	Debug.Log("is inside trigger");
}

