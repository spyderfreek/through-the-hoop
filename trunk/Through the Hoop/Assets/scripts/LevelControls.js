var mainMenu:GameObject;
/*var selectedObject: GameObject;
var haveSelected: boolean;

var leftUpper:Vector3;
var rightLower:Vector3;

var xratio: double;
var yratio: double;*/

function Start() {
	DontDestroyOnLoad(this);
	//get scene coordinates for reference
	/*var ray : Ray = Camera.main.ScreenPointToRay(Vector3(0,0,0)); 
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
	 
	 haveSelected = false;
	 selectedObject = null;*/
}

function OnGUI () {
	// Wrap everything in the designated GUI Area
	GUILayout.BeginArea (Rect (10,Screen.height - 60,Screen.width - 20,50));

	// Begin the singular Horizontal Group
	GUILayout.BeginHorizontal();

	// Arrange two more Controls vertically beside the Button
//	GUILayout.BeginVertical();
//	GUILayout.Box("Slider Value: " + Mathf.Round(sliderValue));
//	sliderValue = GUILayout.HorizontalSlider (sliderValue, 0.0, maxSliderValue);
//
//	// End the Groups and Area
//	GUILayout.EndVertical();


	// Make a background box
	GUI.Box (Rect (10,Screen.height - 100,Screen.width - 20,90), "Controls");

	// Level Reset
	if (GUILayout.Button (GUIContent ("Reset", "Moves all pieces to their starting locations and resets the ball"),
		GUILayout.MaxWidth(200))) {
		GameObject.Find( "BallStart" ).GetComponent( "ShootAndReceiveBall" ).Init();
	}
	
	// Quit
	if (GUILayout.Button (GUIContent ("Quit", "Return to the main menu"),
		GUILayout.MaxWidth(200))) {
		gameObject.active = false;
		mainMenu.active = true;
	}
	
	GUILayout.EndHorizontal();
	GUILayout.EndArea();
	
	//mouse click controls
	/*if(Input.GetMouseButtonDown(0)){
	    var hit : RaycastHit;
        //find where the user clicked on the screen
        var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition); 
        //if an object was hit, drag object 
        if (Physics.Raycast(ray, hit) && !haveSelected) {
            if(hit.transform.parent.name == "Fan"){
                selectedObject = hit.transform.parent.gameObject;
                Debug.Log("selected object is "+selectedObject);
	            haveSelected = true;}
	        }
	    
	}
	
	if (Input.GetMouseButton(0)) {
   
           //var OldPosition = selectedObject.GetComponent("Transform").position;
          // Debug.Log("Old position is "+OldPosition);
          // Debug.Log("New x is "+(OldPosition.x + Input.mousePosition.x*xratio));
           if(haveSelected)
               selectedObject.GetComponent("Transform").position = Vector3(leftUpper.x - Input.mousePosition.x*xratio,leftUpper.y + Input.mousePosition.y*yratio,859);
           

    }
    
    if(Input.GetMouseButtonUp(0)){
        Debug.Log("I am stupid");
        if(haveSelected) haveSelected = false;
    
    }*/

}