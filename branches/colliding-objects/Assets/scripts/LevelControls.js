

function OnGUI () {
	// Wrap everything in the designated GUI Area
	GUILayout.BeginArea (Rect (10,Screen.height - 30,Screen.width - 20,50));

	// Begin the singular Horizontal Group
	GUILayout.BeginHorizontal();

	// Reset, don't move pieces
	if (GUILayout.Button (GUIContent ("Stop", "Removes the ball from play"),
		GUILayout.MaxWidth(100))) {
		GameObject.Find( "BallStart" ).GetComponent( "ShootAndReceiveBall" ).Init();
	}
	
	// Level Reset
	if (GUILayout.Button (GUIContent ("Reset", "Moves all pieces to their starting locations and resets the ball"),
		GUILayout.MaxWidth(100))) {
		GameObject.Find("BallStart").GetComponent(ShootAndReceiveBall).hasLevelSwitched = true;
		Time.timeScale = 1;
		Application.LoadLevel( Application.loadedLevelName );
	}
	
	// Quit
	if (GUILayout.Button (GUIContent ("Level Menu", "Return to the Level Select Menu"),
		GUILayout.MaxWidth(100))) {
		gameObject.GetComponent( "LevelControls" ).enabled = false;
		GameObject.Find("BallStart").GetComponent(ShootAndReceiveBall).hasLevelSwitched = true;
		Time.timeScale = 1;
		Application.LoadLevel( "StageSelect" );
	}
	
	GUILayout.EndHorizontal();
	GUILayout.EndArea();

}