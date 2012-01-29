var suckForceScale:float = 3.0f;

function OnTriggerStay (other : Collider) {
    if( other.name == "Ball(Clone)" ) {
    	other.rigidbody.velocity = -transform.up * Vector3.Distance(other.transform.position, transform.position) * suckForceScale;
    }
}