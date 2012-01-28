
function OnMouseEnter() 
{
	GetComponent("Halo").enabled = true;
	//RenderSettings.haloStrength = 5;
	Debug.Log("Mouse has entered object");
}

function OnMouseExit()
{	
	GetComponent("Halo").enabled = false;
	//RenderSettings.haloStrength = 0;
	Debug.Log("Mouse has left object");
}