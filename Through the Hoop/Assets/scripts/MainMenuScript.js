public var picTitle : Texture;

private var recTitle:Rect;// = new Rect(.25f * Screen.width, .25 * Screen.Height , .5f *Screen.width, .25 *Screen.Height );

private var nButtons:int = 4;

private var nButtonStartX:int;
private var nButtonStartY:int;

private var nButtonNextX:int;
private var nButtonNextY:int;

private var nButtonSizeX:int;
private var nButtonSizeY:int;


function Start()
{
	recTitle = new Rect((Screen.width * 1/4), (Screen.height * 1/4) , (Screen.width * 2/4), (Screen.height * 1/4));
	
	nButtonStartX = ((1.0f/16.0f) * Screen.width);
	nButtonStartY = ((6.0f/8.0f) * Screen.height);
	
	nButtonNextX = ( (4.0f/16.0f) * Screen.width);
	nButtonNextY = 0;
	
	nButtonSizeX = ((2.0f/16.0f) * Screen.width);
	nButtonSizeY = ((1.0f/8.0f) * Screen.height);
	
	
	
}

function OnGUI()
{

	GUI.color = new Color(1,1,1,1);
	//GUI.DrawTexture( recTitle, picTitle );
	
	if(GUI.Button(Rect(nButtonStartX + (nButtonNextX * 0), nButtonStartY, nButtonSizeX, nButtonSizeY),"Start"))
	{
		ButtonPressed(0);
	}
	if(GUI.Button(Rect(nButtonStartX + (nButtonNextX * 1), nButtonStartY, nButtonSizeX, nButtonSizeY),"Instruction"))
	{
		ButtonPressed(1);
	}
	if(GUI.Button(Rect(nButtonStartX + (nButtonNextX * 2), nButtonStartY, nButtonSizeX, nButtonSizeY),"Credit"))
	{
		ButtonPressed(2);
	}
	if(GUI.Button(Rect(nButtonStartX + (nButtonNextX * 3), nButtonStartY, nButtonSizeX, nButtonSizeY),"Quit"))
	{
		ButtonPressed(3);
	}
}

function Update () {
}

private function ButtonPressed(nButtonID)
{
	switch(nButtonID)
	{
		case 0:
			//load the Stage Select
			
			break;
		case 1:
			//load the Instruction
			break;
		case 2:
			//load the Credit
			Application.LoadLevel("Credits");
			
			break;
		case 3:
			//quit game
			Application.Quit();
			break;
	}
}