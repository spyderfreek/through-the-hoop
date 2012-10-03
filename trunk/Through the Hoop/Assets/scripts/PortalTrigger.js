private var goPortalBase:GameObject;
private var goOtherPortalTrigger:GameObject;


public var fTimeDelay:float = 1.0f;
private var travelTime:float = 0.5f;
private var fTimeFromLastCollision:float = fTimeDelay;
private var bCanUse = true;

public function SetCanUseToFalse()
{
bCanUse = false;
}

public function SetCanUseTo()
{
bCanUse = true;
}

function Update () {
	fTimeFromLastCollision += Time.deltaTime;
	if(fTimeFromLastCollision > fTimeDelay)
	{
		fTimeFromLastCollision = fTimeDelay;
		bCanUse = true;
	}
	
}

function Start()
{
//get the base
goPortalBase = this.gameObject.transform.parent.gameObject.transform.parent.gameObject;

//get the other transform

	var szPortalName = this.gameObject.transform.parent.gameObject.name;
	
	var szPortalID = szPortalName.Substring("Portal_".Length);
 
	var nID:int = parseInt(szPortalID);
	 	var szOtherPortal;
 	if(nID == 1)
 	{
 	szOtherPortal = "Portal_2";
 	}
 	else
 	{
 	szOtherPortal = "Portal_1";
 	}
 	
 	var szOtherPortalTriggerPath = szOtherPortal + "/Trigger";
	goOtherPortalTrigger = goPortalBase.transform.Find(szOtherPortalTriggerPath).gameObject;

var test = false;
}
function OnTriggerEnter (myTrigger : Collider) {

if(bCanUse == true)
{
 if(myTrigger.gameObject.name.IndexOf("Ball") == 0){
 
	//var OtherScrpt:PortalTrigger = goOtherPortalTrigger
	//set the object to the other portal.
	var goBall = myTrigger.gameObject;
//	var fAngle:float = Mathf.ACos(Vector3.Dot(this.gameObject.transform.right, goBall.rigidbody.velocity.normalized));
	var fAngle:float = Vector3.Angle(this.gameObject.transform.up, goBall.rigidbody.velocity.normalized);
	
	//it's going away. do not continue
	if(fAngle < 90)
		return;
	 
	
 //see which direction is going
 
	var fMagnatude:float = myTrigger.gameObject.rigidbody.velocity.magnitude;


	//prevent trail from wiping across the whole screen during teleportation
	var trail:TrailRenderer = myTrigger.gameObject.GetComponent(TrailRenderer);
	trail.enabled = false;
	myTrigger.gameObject.renderer.enabled = false;
	yield WaitForSeconds(travelTime);
	

	myTrigger.gameObject.renderer.enabled = true;
	//set the object to the other portal.
	goBall.rigidbody.velocity = goOtherPortalTrigger.transform.up * fMagnatude;
	goBall.transform.position = goOtherPortalTrigger.transform.position;
	
	
	
	if( myTrigger.gameObject != null )
		trail.enabled = true;
	
 }

}
}


