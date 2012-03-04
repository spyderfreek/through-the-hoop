var numLevels:int = 3;
var levelControls:GameObject;

function Start() {
	DontDestroyOnLoad(this);
}

function LevelButton( level:int ) {
	if (GUILayout.Button ("Level " + level,
		GUILayout.MaxWidth(200))) {
		Application.LoadLevel( level );
		gameObject.active = false;
		levelControls.active = true;
	}
}

function OnGUI () {
	// Make a background box
	GUILayout.BeginArea (Rect (10,10,100,Screen.height - 20));
	GUILayout.BeginVertical();
//	GUILayout.Box (Rect (10,10,100,90), "Loader Menu");

	for( i = 1; i <= numLevels; i++ ) {
		LevelButton(i);
	}
	
	GUILayout.EndVertical();
	GUILayout.EndArea();
}