
function OnTriggerEnter () {
	var clip:AudioSource = gameObject.GetComponent(AudioSource);
	clip.Play(0);
	clip.loop = true;
}

function OnTriggerExit () {
	gameObject.GetComponent(AudioSource).loop = false;
}

function OnTriggerStay () {
	var ballTransform:Transform = GameObject.Find("Ball(Clone)").GetComponent("Transform");
     var myTransform:Transform = gameObject.GetComponent("Transform");
 
     var distance = Vector3.Distance(ballTransform.position, myTransform.position);
	gameObject.GetComponent(AudioSource).volume = distance / gameObject.collider.radius;
}