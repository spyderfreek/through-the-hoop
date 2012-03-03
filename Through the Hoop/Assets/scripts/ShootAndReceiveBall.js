public var prefab:GameObject;

private var bBallLaunched = false;

//timer to check for trigger after launched
private var fTimePassed:float = 0.0f;
public var fTimeToCheck:float = 1.0f;

//keep an instinse of a ball
private var goBall:GameObject = null;

//keep track of how long will the win screen will last
public var fWinTimeScale:float = 1.5f;
public var fWinTimeAccel:float = 0.02f;

private var fTimeSinceFirstLoop = 0.0f;
public var fTimeWinDiration = 5.0f;

public var hasLevelSwitched:boolean = false;private var bBallLeft = false;

private var bWin = false;
var blackTexture : Texture;

public var szWinScene;

function OnGUI(){

//using whatever texture is fine as long as there is no transparent textures


 	GUI.color = new Color(0, 0, 0, fTimeSinceFirstLoop/ fTimeWinDiration);
	GUI.DrawTexture( new Rect(0, 0, Screen.width, Screen.height ), blackTexture );
}

function Update () {


	if (Input.GetKeyDown ("space"))
	{
 	ShootBall();
	}

	
	if(bWin == true)
	{
	fTimeSinceFirstLoop += Time.deltaTime / Time.timeScale;
	
		if(fTimeSinceFirstLoop > fTimeWinDiration)
		{
			//change to win scene
			Time.timeScale = 1;
			Application.LoadLevel("WinScreen");
		}
		else if( !hasLevelSwitched )
		{
			Time.timeScale += fWinTimeAccel;
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


Debug.Log("Winhit");
	bWin = true;
goBall.transform.position = this.transform.position;
goBall.rigidbody.velocity.x = 0.0;
goBall.rigidbody.velocity.y = 0.0;


Time.timeScale = fWinTimeScale;

}

function OnTriggerEnter (myTrigger : Collider) {
 //if(myTrigger.gameObject.name.IndexOf("Ball") == 0){
 if(myTrigger.gameObject == goBall)
 {
 	if(bBallLeft == false)
 		return;
 
 //if(  Vector3.Dot( myTrigger.rigidbody.velocity, transform.up ) < 0
 //	&& Vector3.Dot( transform.position - myTrigger.transform.position, transform.up ) < 0 )
 	
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

