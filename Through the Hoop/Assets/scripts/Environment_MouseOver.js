var mat:Material;
var glowColor:Color = Color(1,1,1,0.5);
var normalColor:Color = Color(1,1,1,0);


function OnMouseEnter() 
{
	mat.SetColor("_Color", glowColor);
	Debug.Log("mouse enter");
}

function OnMouseExit()
{	
	mat.SetColor("_Color", normalColor);
	Debug.Log("mouse exit");
}