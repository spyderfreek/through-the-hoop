var force : float = 2.0;

function OnCollisionEnter( collision : Collision )
{
	if( collision.rigidbody == null ) return;
	
	if( collision.rigidbody.name == "Ball(Clone)" && Vector3.Dot( collision.relativeVelocity, transform.forward ) <= 0 ) {
		animation.Play("bounce");
		audio.Play();

		collision.rigidbody.AddForce( transform.forward * force );
	}
}