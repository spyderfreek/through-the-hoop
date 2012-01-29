var attractionCoeff: float = 2.0;
var cutoffDistance: float = 4.0;

function Start(){
    audio.Play();

}

function FixedUpdate () {
     if( GameObject.Find("Ball(Clone)") != null){
         //Debug.Log("in ball");
         var ballTransform:Transform = GameObject.Find("Ball(Clone)").GetComponent("Transform");
         var myTransform:Transform = gameObject.GetComponent("Transform");
     
         var distance = Vector3.Distance(ballTransform.position, myTransform.position);
         Debug.Log(distance);
     
     	if( distance < cutoffDistance ) {
         	GameObject.Find("Ball(Clone)").GetComponent("Rigidbody").AddForce(( myTransform.position - ballTransform.position )*(attractionCoeff/(distance*distance)));
         }
     }
}