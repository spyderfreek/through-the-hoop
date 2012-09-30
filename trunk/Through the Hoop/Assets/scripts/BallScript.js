public var minTrailVelocity:float = 2.0f;

function OnCollisionEnter( other: Collision ) {
	if( audio.enabled == true && !other.isTrigger )
		audio.Play();
}

//function FixedUpdate() {
//	if( GetComponent(Rigidbody).velocity.magnitude < minTrailVelocity ) {
//		GetComponent(TrailRenderer).enabled = false;
//	}
//	else {
//		GetComponent(TrailRenderer).enabled = true;
//	}
//}