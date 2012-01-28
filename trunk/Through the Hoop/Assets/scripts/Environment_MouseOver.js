var mat:Material;
var hasMultipleObjects:boolean = false;
var glowColor:Color = Color(1,1,1,0.5);
var normalColor:Color = Color(1,1,1,0);

function Start()
{
	mat.SetColor("_Color", normalColor);
}

function OnMouseEnter() 
{
	if(hasMultipleObjects) {
		for( var child : Transform in transform.parent ) {
			var rend:Renderer = child.gameObject.GetComponent(Renderer);
			if( rend ) {
				rend.material.SetColor("_Color", glowColor);
			}
		}
	}
	else {
		mat.SetColor("_Color", glowColor);
	}
	Debug.Log("mouse enter");
}

function OnMouseExit()
{	
	if(hasMultipleObjects) {
		for( var child : Transform in transform.parent ) {
			var rend:Renderer = child.gameObject.GetComponent(Renderer);
			if( rend ) {
				rend.material.SetColor("_Color", normalColor);
			}
		}
	}
	else {
		mat.SetColor("_Color", normalColor);
	}
	Debug.Log("mouse exit");
}