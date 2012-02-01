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

	if(bBallLaunched == true && bWin == false)
	{

		fTimePassed += Time.deltaTime;
		if(fTimePassed > fTimeToCheck)
		{
		fTimePassed = fTimeToCheck;
		//if a cirtain amount has passed since the ball been launch set the collider back on.
		Physics.IgnoreCollision(goBall.collider, collider,false);
		var goBlocker:GameObject = transform.GetChild(0).gameObject;
		
		Physics.IgnoreCollision(goBlocker.collider, goBall.collider,false);
		}
	
	}
	
	if(bWin == true)
	{
	fTimeSinceFirstLoop += Time.deltaTime / Time.timeScale;
	Time.timeScale += fWinTimeAccel;
	
		if(fTimeSinceFirstLoop > fTimeWinDiration)
		{
			//change to win scene
			Time.timeScale = 1;
			Application.LoadLevel("WinScreen");
		}
	
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
	
	//make sure that collison form fire point is off.
	Physics.IgnoreCollision(goBall.collider, collider);
	var goBlocker:GameObject = transform.GetChild(0).gameObject;
	Physics.IgnoreCollision(goBlocker.collider, goBall.collider);
	
	bWin = false;
	


}



function WinHit()
{

  		var goBlocker:GameObject = transform.GetChild(0).gameObject;
		//Physics.IgnoreCollision(goBlocker.collider, goBall.collider,true);
		Destroy(goBlocker);
Debug.Log("Winhit");
	bWin = true;
goBall.transform.position = this.transform.position;
goBall.rigidbody.velocity.x = 0.0;
goBall.rigidbody.velocity.y = 0.0;


Time.timeScale = fWinTimeScale;

}

function OnTriggerEnter (myTrigger : Collider) {
 //if(myTrigger.gameObject.name.IndexOf("Ball") == 0){
 if(myTrigger.gameObject == goBall && Vector3.Dot( myTrigger.rigidbody.velocity, transform.up ) < 0
 	&& Vector3.Dot( transform.position - myTrigger.transform.position, transform.up ) < 0 )
 {
  WinHit();

  }
}



