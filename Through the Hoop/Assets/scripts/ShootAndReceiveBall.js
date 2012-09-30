public var prefab:GameObject;

@HideInInspector
public var bBallLaunched = false;

//timer to check for trigger after launched
private var fTimePassed:float = 0.0f;
public var fTimeToCheck:float = 1.0f;

//keep an instance of a ball
@HideInInspector
public var goBall:GameObject = null;

//keep track of how long will the win screen will last
public var fWinTimeScale:float = 1.5f;

private var fTimeSinceFirstLoop = 0.0f;
public var fTimeWinDiration = 5.0f;

public var hasLevelSwitched:boolean = false;

private var bBallLeft = false;

private var bWin = false;
var blackTexture : Texture;

public var szWinScene;

private var nTimeBallInPlay = 0.0f;

private var nBestTime = 9999.0f;

private var szFileName;

public function GetTimeBallInPlay()
{
return nTimeBallInPlay;
}

function Start () {
    var Pathname = Application.currentScene;

	//szFileName = System.IO.Path.GetFileName(Pathname);
	//szFileName = System.IO.Path.GetFileNameWithoutExtension(Pathname);
	
	szFileName = Application.loadedLevelName;
//	szFileName = szFileName.replace(".unity","");
	//PlayerPrefs.SetFloat(szFileName + "_BestTime",nBestTime);
	//System.IO.Path.GetFileNameWithoutExtension
	var szLoadTime:String =szFileName + "_BestTime"; 
	var nLoadedBestTime = PlayerPrefs.GetFloat(szFileName + "_BestTime",nBestTime);
	nBestTime = nLoadedBestTime;
}
function OnGUI(){

	//using whatever texture is fine as long as there is no transparent textures	
	//drawing the Fading

	//draw the timer
 	GUI.color = new Color(1,1,1,1);
	GUI.Box(new Rect(Screen.width * 15/20, 0, Screen.width * 5/20, Screen.height * 3/20 ), 
			"Time: \t" + Mathf.FloorToInt(nTimeBallInPlay)+ 
			"\nBest Time: \t" + Mathf.FloorToInt(nBestTime));
	//GUI.Box(new Rect(0,0,50,50), "Time: " + roundNumber(num, dec));
	
	 	GUI.color = new Color(0, 0, 0, fTimeSinceFirstLoop/ fTimeWinDiration);
	GUI.DrawTexture( new Rect(0, 0, Screen.width, Screen.height ), blackTexture );
	
}

function Update () {


	if (Input.GetKeyDown ("space"))
	{
 	ShootBall();
	}

	if(bBallLaunched == true && bWin == false)
	{
		//keep track of time when the ball is launched
		nTimeBallInPlay += Time.deltaTime;

	}
	
	if(bWin == true)
	{
	fTimeSinceFirstLoop += Time.deltaTime;
	
		if(fTimeSinceFirstLoop > fTimeWinDiration)
		{
			//change to win scene
			Application.LoadLevel("WinScreen");
		}

		Debug.Log( "hasLevelSwitched = " + hasLevelSwitched );
	
	}
	


}

//Reset everything
function Init()
{
	bBallLaunched = false;
	if(goBall != null)
	{
	Destroy(goBall);
	}
	fTimePassed = 0.0f;
	fTimeSinceFirstLoop = 0.0f;
	
	bWin = false;
	
	bBallLeft = false;
	Time.timeScale = 1.0f;
	nTimeBallInPlay = 0.0f;
}

function ShootBall()
{

	if(bBallLaunched == true) {
		Init();
		return;
	}
	
	fTimePassed = 0.0f;
	
	bBallLaunched = true;
	goBall = Instantiate(prefab, transform.position, Quaternion.identity);
	fTimeSinceFirstLoop = 0.0f;

	
	bWin = false;
	


}



function WinHit()
{
	goBall.transform.position = this.transform.position;
	goBall.rigidbody.velocity.x = 0.0;
	goBall.rigidbody.velocity.y = 0.0;

	if( !bWin ) {
		Debug.Log("Winhit");
		bWin = true;
	
		audio.Play(0);
	
		//Time.timeScale = fWinTimeScale;
	
		//also save the timer.
		if (Mathf.FloorToInt(this.nTimeBallInPlay) < nBestTime)
			nBestTime = Mathf.FloorToInt(nTimeBallInPlay);
			
		//save to registry
	
		PlayerPrefs.SetString("LastWinStage", szFileName);
		PlayerPrefs.SetFloat(szFileName + "_BestTime",nBestTime);
		//PlayerPrefs.SetFloat("Player Score", 10.0);
	}
}

function OnTriggerEnter (myTrigger : Collider) {
 //if(myTrigger.gameObject.name.IndexOf("Ball") == 0){
 if(myTrigger.gameObject == goBall)
 {
 	if(bBallLeft == false)
 		return;
 
 //if(  Vector3.Dot( myTrigger.rigidbody.velocity, transform.up ) < 0 )
 	if(myTrigger.transform.position.y > this.transform.position.y)
 	{
  		WinHit();

  	}
  	else if (bWin == false)
  	{
  	
  		//stop due to user going thought the hoop at the bottom
  		Init();
  	}
  }
}

function OnTriggerExit( myTrigger : Collider ){
	if(myTrigger.gameObject == goBall)
	{
	
		if(this.bBallLeft == true)
			return;
	
	
		if(goBall.transform.position.y < this.transform.position.y)
		{
		//ball is leaving from the bottom
			this.bBallLeft = true;
		
		}
		else
		{
		//ball is leaving from the top
			Init();
		}

		
 		
 		
	}
}

function roundNumber(num, dec) {
	var result = Mathf.Round(num*Mathf.Pow(10,dec))/Mathf.Pow(10,dec);
	return result;
}