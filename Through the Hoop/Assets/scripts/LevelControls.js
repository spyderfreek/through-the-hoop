var mainMenu:GameObject;

function Start() {
	DontDestroyOnLoad(this);
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
		print("Reset clicked");
	}
	
	// Quit
	if (GUILayout.Button (GUIContent ("Quit", "Return to the main menu"),
		GUILayout.MaxWidth(200))) {
		gameObject.active = false;
		mainMenu.active = true;
	}
	
	GUILayout.EndHorizontal();
	GUILayout.EndArea();

}