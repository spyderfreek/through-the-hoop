var force : float = 2.0;

function OnCollisionEnter( collision : Collision )
{
	if( ! collision.gameObject.GetComponent(Rigidbody) ) return;
	
	var normal:Vector3 = transform.rotation * Vector3(0,1,0);
	
	if( collision.rigidbody.name == "Ball(Clone)" && Vector3.Dot( collision.transform.position, transform.position ) >= 0 ) {
		//collision.rigidbody.AddForce( normal * force );
		animation.Play("bounce");
		audio.Play();
	}
}