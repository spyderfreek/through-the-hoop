var mat:Material;
var hasMultipleObjects:boolean = false;
var glowColor:Color = Color(1,1,1,0.5);
var normalColor:Color = Color(1,1,1,0);

private var haveSelected: boolean;

private var ballPlane: Plane;
private var offsetVec: Vector3;

private var moveForceProportional: double = 6;
// since there's no steady-state error to contend with (i.e. fighting against gravity)
// we dont' really need an integral term, but I'm leaving this in for completeness.
private var moveForceIntegral: double = 0;
private var moveForceDifferential: double = 4;
private var drag: double = 0.5;

private var moveError: Vector3 = Vector3.zero;
private var moveErrorIntegral: Vector3 = Vector3.zero;
private var moveErrorDifferential: Vector3 = Vector3.zero;


function GetLaunched()
{
	return GameObject.Find("BallStart").GetComponent(ShootAndReceiveBall).bBallLaunched;
}

function ChangeColor( newColor : Color )
{
	if(hasMultipleObjects) {
		for( var child : Transform in transform ) {
			var rend:Renderer = child.gameObject.GetComponent(Renderer);
			if( rend ) {
				rend.material.SetColor("_Color", newColor);
			}
		}
	}
	else {
		GetComponent(Renderer).material.SetColor("_Color", newColor);
	}
}

function Start()
{
	ChangeColor( normalColor );
	
	//get scene coordinates for reference
	 
	 ballPlane = Plane( Vector3(0,0,1), GameObject.Find("BallStart").GetComponent(Transform).position );
	 
	 haveSelected = false;
	 rigidbody.isKinematic = true;
	 rigidbody.useGravity = false;
	 rigidbody.constraints = RigidbodyConstraints.FreezePositionZ | RigidbodyConstraints.FreezeRotation;
	 rigidbody.drag = drag;

}

function OnMouseEnter() 
{
	if( GetLaunched() ) {
		return;
	}
	ChangeColor( glowColor );
}

function OnMouseExit()
{	
	if( ! haveSelected ) {
		ChangeColor( normalColor );
	}
}

function OnMouseDown()
{
	if( GetLaunched() ) {
		return;
	}
	
	//mouse click controls
	if(Input.GetMouseButtonDown(0)){
	    var hit : RaycastHit;
        //find where the user clicked on the screen
        var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        //if an object was hit, drag object 

	    haveSelected = true;    
	    rigidbody.isKinematic = false;
	    
	    var dist:float;
	    ballPlane.Raycast(ray, dist);
	    
	    var objectPos:Vector3 = transform.position;
	    offsetVec = objectPos - ray.direction * dist;
	    
	    moveError = Vector3.zero;
	    moveErrorIntegral = Vector3.zero;
	    moveErrorDifferential = Vector3.zero;
	}
}

function FixedUpdate() {
	if (Input.GetMouseButton(0) && haveSelected ) {

   		//find where the user clicked on the screen
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var dist: float;
		ballPlane.Raycast(ray, dist);
		
		//transform.position = ray.direction * dist + offsetVec;
		var newMoveError = ray.direction * dist - transform.position + offsetVec;
		//Debug.Log("Error = " + newMoveError.magnitude);
		moveErrorIntegral += newMoveError * Time.deltaTime;
		moveErrorDifferential = (newMoveError - moveError)/Time.deltaTime;
		rigidbody.AddForce( moveForceProportional * newMoveError + moveForceIntegral * moveErrorIntegral + moveForceDifferential * moveErrorDifferential );
		//rigidbody.MovePosition(newMoveError);
		moveError = newMoveError;

    }
    
}


function OnMouseUp()
{
	if( GetLaunched() ) {
		return;
	}
	
    if(Input.GetMouseButtonUp(0)){
        haveSelected = false;
        //rigidbody.velocity = Vector3.zero;
        //rigidbody.useGravity = true;
        
        ChangeColor( normalColor );
        
        var hitInfo:RaycastHit;
        
        Debug.DrawLine( transform.position, transform.position  + Vector3.down * 5, Color.red, 1 );
        
        Debug.Log( rigidbody );
        
        if( rigidbody.SweepTest(Vector3.down, hitInfo, 5) ) {
        	rigidbody.isKinematic = true;
        	//transform.position += hitInfo.distance * Vector3.down;
	        Debug.Log( "test hit: " + hitInfo.distance );
        	//transform.position += hitInfo.distance * Vector3.down;
        }
        else {
        	Debug.Log( "Sweep test failed!" );
        }
        
        rigidbody.isKinematic = true;
        
        
    }
}