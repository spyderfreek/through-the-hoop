public var picTitle : Texture;

private var recTitle:Rect;// = new Rect(.25f * Screen.width, .25 * Screen.Height , .5f *Screen.width, .25 *Screen.Height );

private var recStart:Rect;
private var rectInstruction:Rect;
private var rectCredit:Rect;

function Start()
{
	recTitle = new Rect(0, 0 , Screen.width,Screen.height);
	var fPicWidth:float = 4800.0f;
	var fScreenWidth:float = Screen.width;

	var fPicHeight:float = 2700.0f;
	var fScreenHeight:float = Screen.height;
	
	var fWidthRatio:float = fPicWidth / fScreenWidth;
	var fHeightRatio:float = fPicHeight / fScreenHeight;
	
	//picTitle.width
	var xStartRect:int = 1800;
	var yStartRect:int = 1500;
	
	
	var xSizeRect:int = 1300;
	var ySizeRect:int = 250;
	
	var yChangeRect:int = 300 / fHeightRatio;
	
	
	//start creating the rect
	recStart = new Rect(xStartRect / fWidthRatio , yStartRect /fHeightRatio, xSizeRect / fWidthRatio, ySizeRect / fHeightRatio );
	
	rectInstruction = new Rect(recStart);
	rectInstruction.y += yChangeRect;
	
	rectCredit = new Rect(rectInstruction);
	rectCredit.y += yChangeRect;
	
}

function OnGUI()
{

	GUI.color = new Color(1,1,1,1);
	GUI.DrawTexture( recTitle, picTitle );
	
	//get the mouse pos
	
	var mousePosition = Input.mousePosition;

    /* adjust the y-coordinate for the GUI's coordinate system */

    mousePosition.y = Screen.height - mousePosition.y;


	if(recStart.Contains(mousePosition))
	{
		if(GUI.Button(recStart,""))
		{
			ButtonPressed(0);
		}
	}
	
	if(rectInstruction.Contains(mousePosition))
	{
		if(GUI.Button(rectInstruction,""))
		{
			ButtonPressed(1);
		}
	}
	
	if(rectCredit.Contains(mousePosition))
	{
		if(GUI.Button(rectCredit,""))
		{
			ButtonPressed(2);
		}	
	}
	//if(GUI.Button(Rect(nButtonStartX + (nButtonNextX * 3), nButtonStartY, nButtonSizeX, nButtonSizeY),"Quit"))
	//{
		//ButtonPressed(3);
	//}
	
	//GUI.DrawTexture( recTitle, picTitle );
	
}

function Update () {
}

private function ButtonPressed(nButtonID)
{
	switch(nButtonID)
	{
		case 0:
			//load the Stage Select
			Application.LoadLevel("StageSelect");
			
			break;
		case 1:
			//load the Instruction
			Application.LoadLevel("Instruction");
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