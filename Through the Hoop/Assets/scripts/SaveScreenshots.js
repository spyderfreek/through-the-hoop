import System.IO;

private var frameRate:int = 60;

private var screenOutputPath:String;
private var videoOutputPath:String;
private var videoSubfolder:String;
private var coolDown:float = 0.3f;
private var lastScreenTime:float = coolDown;
private var lastVideoTime:float = coolDown;
private var videoEnabled:boolean = false;

#if UNITY_STANDALONE_OSX || UNITY_STANDALONE_WIN
function Start () {
	screenOutputPath = Application.persistentDataPath + '/screenshots/';
	if( ! Directory.Exists( screenOutputPath ) ) {
		Directory.CreateDirectory( screenOutputPath );
	}
	
	videoOutputPath = Application.persistentDataPath + '/videos/';
	if( ! Directory.Exists( videoOutputPath ) ) {
		Directory.CreateDirectory( videoOutputPath );
	}
}

function Update () {
	lastScreenTime += Time.deltaTime;
	lastVideoTime += Time.deltaTime;
	if( Input.GetKeyDown( KeyCode.F9 ) && lastScreenTime >= coolDown ) {
		var screenName = String.Format('{0}Screen_{1:D5}.png', screenOutputPath, Time.frameCount);
		Application.CaptureScreenshot( screenName );
		Debug.Log('Screenshot saved to: ' + screenName );
		lastScreenTime = 0f;
	}
	
	if( Input.GetKeyDown( KeyCode.F10 ) && lastVideoTime >= coolDown ) {
		videoEnabled = !videoEnabled;
		lastScreenTime = 0f;
		
		if( videoEnabled ) {
			videoSubfolder = videoOutputPath + System.DateTime.Now.ToString().Replace(':','_').Replace('/','_') + '/';
			Directory.CreateDirectory( videoSubfolder );
			Debug.Log('Video folder created: ' + videoSubfolder );
			Time.captureFramerate = frameRate;
		}
		else {
			Time.captureFramerate = 0;
		}
	}
	
	if( videoEnabled ) {
		Application.CaptureScreenshot( String.Format('{0}Video_{1:D5}.png', videoSubfolder, Time.frameCount) );
	}
}

#endif