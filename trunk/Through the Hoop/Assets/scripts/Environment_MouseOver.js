var mat:Material;
var hasMultipleObjects:boolean = false;
var glowColor:Color = Color(1,1,1,0.5);
var normalColor:Color = Color(1,1,1,0);

private var selectedObject: GameObject;
private var haveSelected: boolean;

private var leftUpper:Vector3;
private var rightLower:Vector3;

private var xratio: double;
private var yratio: double;

private var ballPlane: Plane;
private var offsetVec: Vector3;

function GetLaunched()
{
	return GameObject.Find("BallStart").GetComponent("ShootAndReceiveBall").bBallLaunched;
}

function Start()
{
	mat.SetColor("_Color", normalColor);
	
	//get scene coordinates for reference
	var ray : Ray = Camera.main.ScreenPointToRay(Vector3(0,0,0)); 
	var hit : RaycastHit;
	 if (Physics.Raycast(ray, hit)) {
	 Debug.Log("first hit");
	      leftUpper = hit.point;
	 }
	 ray = Camera.main.ScreenPointToRay(Vector3(Screen.width,Screen.height,0)); 
	 if (Physics.Raycast(ray, hit)) {
	      rightLower = hit.point;
	       Debug.Log("second hit");
	 }
	 Debug.Log(leftUpper.y);
	 Debug.Log(rightLower.y);
	 
	 xratio = ( leftUpper.x - rightLower.x )/Screen.width;
	 Debug.Log(xratio);
	 yratio = ( rightLower.y - leftUpper.y )/Screen.height;
	 Debug.Log(yratio);
	 
	 ballPlane = Plane( Vector3(0,0,1), GameObject.Find("BallStart").GetComponent(Transform).position );
	 
	 haveSelected = false;
	 selectedObject = null;

}

function OnMouseEnter() 
{
	if( GetLaunched() ) {
		return;
	}
	if(hasMultipleObjects) {
		for( var child : Transform in transform.parent ) {
			var rend:Renderer = child.gameObject.GetComponent(Renderer);
			if( rend ) {
				rend.material.SetColor("_Color", glowColor);
			}
		}
	}
	else {
		GetComponent(Renderer).material.SetColor("_Color", glowColor);
	}
	Debug.Log("mouse enter");
}

function OnMouseExit()
{	
	if(hasMultipleObjects) {
		for( var child : Transform in transform.parent ) {
			var rend:Renderer = child.gameObject.GetComponent(Renderer);
			if( rend ) {
				rend.material.SetColor("_Color", normalColor);
			}
		}
	}
	else {
		GetComponent(Renderer).material.SetColor("_Color", normalColor);
	}
	Debug.Log("mouse exit");
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
	    var dist:float;
	    ballPlane.Raycast(ray, dist);
	    
	    var objectPos:Vector3 = hasMultipleObjects ? transform.parent.position : transform.position;
	    offsetVec = objectPos - ray.direction * dist;
	}
}

function OnMouseDrag()
{	
	if( GetLaunched() ) {
		return;
	}
	
	if (Input.GetMouseButton(0)) {
   
           //var OldPosition = selectedObject.GetComponent("Transform").position;
          // Debug.Log("Old position is "+OldPosition);
          // Debug.Log("New x is "+(OldPosition.x + Input.mousePosition.x*xratio));
           if(haveSelected) {
           		//find where the user clicked on the screen
        		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        		var dist: float;
        		ballPlane.Raycast(ray, dist);
        		
        		if( hasMultipleObjects ) {
        			transform.parent.position = ray.direction * dist + offsetVec;
        		}
        		else {
        			transform.position = ray.direction * dist + offsetVec;
        		}
           }

    }
    
}

function OnMouseUp()
{
	if( GetLaunched() ) {
		return;
	}
	
    if(Input.GetMouseButtonUp(0)){
        haveSelected = false;
    
    }
}