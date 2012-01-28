private var anim:AnimationState;

function OnCollision()
{
	anim = animation["bounce"];
	anim.Play("bounce");
}