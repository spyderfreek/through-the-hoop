public var prefab:GameObject;

private var bBallLaunched = false;

//timer to check for trigger after launched
private var fTimePassed:float = 0.0f;
public var fTimeToCheck:float = 1.0f;

//keep an instinse of a ball
private var goBall:GameObject;
function Update () {
if (Input.GetKeyDown ("space"))
{
 ShootBall();
}

if(bBallLaunched == true)
{

	fTimePassed += Time.deltaTime;
	if(fTimePassed > fTimeToCheck)
	{
	fTimePassed = fTimeToCheck;
	Physics.IgnoreCollision(goBall.collider, collider,false);
	
	}
	
}


}

function ShootBall()
{

	if(bBallLaunched == true)
	return;
	
	fTimePassed = 0.0f;
	
	bBallLaunched = true;
	goBall = Instantiate(prefab, transform.position, Quaternion.identity);

	//make sure that collison form fire point is off.
	Physics.IgnoreCollision(goBall.collider, collider);

}



function WinHit()
{

Debug.Log("Winhit");
goBall.transform.position = this.transform.position;
goBall.rigidbody.velocity.x = 0.0;
goBall.rigidbody.velocity.y = 0.0;
}

function OnTriggerEnter (myTrigger : Collider) {
 //if(myTrigger.gameObject.name.IndexOf("Ball") == 0){
 if(myTrigger.gameObject == goBall)
  WinHit();
}



