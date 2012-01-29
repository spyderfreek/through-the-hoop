public var picStage_0 : Texture;
public var picStage_1 : Texture;
public var picStage_2 : Texture;
public var picStage_3 : Texture;
public var picStage_4 : Texture;
public var picStage_5 : Texture;

public var szStage_0 : String;
public var szStage_1 : String;
public var szStage_2 : String;
public var szStage_3 : String;
public var szStage_4 : String;
public var szStage_5 : String;

private var nSelectedStage:int;

//Boxes
private var nButtonBoxStartX;
private var nButtonBoxStartY;
private var nButtonBoxWidth;
private var nButtonBoxHeight;

//buttons inside of it
private var nButtonStartX_Stage:int;
private var nButtonStartY_Stage:int;

private var nButtonNextX_Stage:int;
private var nButtonNextY_Stage:int;

private var nButtonSizeX_Stage:int;
private var nButtonSizeY_Stage:int;

//go button
private var nButtonStartX_GO:int;
private var nButtonStartY_GO:int;

private var nButtonSizeX_GO:int;
private var nButtonSizeY_GO:int;

private var nButtonStartX_Back:int;
private var nButtonStartY_Back:int;

private var nButtonSizeX_Back:int;
private var nButtonSizeY_Back:int;


//Stage Image
private var nImageStartX :int;
private var nImageStartY :int;

private var nImageWidth : int;
private var nImageHeight : int;

function Start()
{
	nButtonBoxStartX = (3.0f/4.0f) * Screen.width - 20;
	nButtonBoxStartY = (1.0f/8.0f) * Screen.height;
	
	nButtonBoxWidth = (1.0f/4.0f) * Screen.width;
	nButtonBoxHeight = (5.0f/8.0f) * Screen.height;
	
	nButtonStartX_Stage = nButtonBoxStartX + (nButtonBoxWidth * (1.0f/ 8.0f));
	nButtonStartY_Stage = nButtonBoxStartY + (nButtonBoxHeight * (1.0f / 12.0f ));
	
	nButtonSizeX_Stage = (nButtonBoxWidth * (6.0f/8.0f));
	nButtonSizeY_Stage = (nButtonBoxHeight * (2.0f/12.0f));
	
	nButtonNextX_Stage = 0;
	nButtonNextY_Stage = (4.0f / 12.0f) * nButtonBoxHeight;
	
	
	//go
	nButtonStartX_GO = (Screen.width) * ( 2.0f / 4.0f);
	nButtonStartY_GO = (Screen.height) * ( 8.0f / 10.0f);
	
	nButtonSizeX_GO = nButtonSizeX_Stage;
	nButtonSizeY_GO = nButtonSizeY_Stage;

//back
	nButtonStartX_Back = nButtonStartX_Stage;
	nButtonStartY_Back = nButtonStartY_GO;
	
	nButtonSizeX_Back = nButtonSizeX_Stage;
	nButtonSizeY_Back = nButtonSizeY_Stage;	
 
 //image
	nImageStartX = (Screen.width * (7.0f / 100.0f)) ;
	nImageStartY = (Screen.height * (15.0f / 100.0f));
	
	nImageWidth  = (Screen.width * (60.0f / 100.0f));
    nImageHeight = (Screen.height * (60.0f / 100.0f));
     
     
}

function OnGUI()
{
//background box
	GUI.Box (Rect (10,10,Screen.width - 20, Screen.height - 20), "Stage Select");

	GUI.Box (Rect (nButtonBoxStartX,nButtonBoxStartY,nButtonBoxWidth,nButtonBoxHeight+40),"");
	
	GUI.Box(Rect(nButtonStartX_Stage + (nButtonNextX_Stage * nSelectedStage) - 5, nButtonStartY_Stage + ((nButtonNextY_Stage * nSelectedStage)/2) -5, nButtonSizeX_Stage + 10, nButtonSizeY_Stage + 10),"");
	
	if(GUI.Button(Rect(nButtonStartX_Stage + (nButtonNextX_Stage * 0), nButtonStartY_Stage + (nButtonNextY_Stage * 0)/2, nButtonSizeX_Stage, nButtonSizeY_Stage),"Level 1"))
	{
		nSelectedStage = 0;
	}	

	if(GUI.Button(Rect(nButtonStartX_Stage + (nButtonNextX_Stage * 0), nButtonStartY_Stage + (nButtonNextY_Stage * 1)/2, nButtonSizeX_Stage, nButtonSizeY_Stage),"Level 2"))
	{
		nSelectedStage = 1;
	}	

	if(GUI.Button(Rect(nButtonStartX_Stage + (nButtonNextX_Stage * 0), nButtonStartY_Stage + (nButtonNextY_Stage * 2)/2, nButtonSizeX_Stage, nButtonSizeY_Stage),"Level 3"))
	{
		nSelectedStage = 2;
	}
	if(GUI.Button(Rect(nButtonStartX_Stage + (nButtonNextX_Stage * 0), nButtonStartY_Stage + (nButtonNextY_Stage * 3)/2, nButtonSizeX_Stage, nButtonSizeY_Stage),"Level 4"))
	{
		nSelectedStage = 3;
	}	
	if(GUI.Button(Rect(nButtonStartX_Stage + (nButtonNextX_Stage * 0), nButtonStartY_Stage + (nButtonNextY_Stage * 4)/2, nButtonSizeX_Stage, nButtonSizeY_Stage),"Level 5"))
	{
		nSelectedStage = 4;
	}	
	if(GUI.Button(Rect(nButtonStartX_Stage + (nButtonNextX_Stage * 0), nButtonStartY_Stage + (nButtonNextY_Stage * 5)/2, nButtonSizeX_Stage, nButtonSizeY_Stage),"Level 6"))
	{
		nSelectedStage = 5;
	}		
	
	//Go
	if(GUI.Button(Rect(nButtonStartX_GO-200,nButtonStartY_GO, nButtonSizeX_GO,nButtonSizeY_GO),"Start"))
	{
	 	switch( nSelectedStage)
	{
	 	case 0:
				Application.LoadLevel(szStage_0);
			break;
		case 1:
				Application.LoadLevel(szStage_1);
 
			break;
		case 2:
				Application.LoadLevel(szStage_2);
 
			break;

	}
	}
	
	//back
	if(GUI.Button(Rect(nButtonStartX_Back-200,nButtonStartY_Back, nButtonSizeX_Back,nButtonSizeY_Back),"Back"))
	{
		//go back to main menu 
			Application.LoadLevel("MainMenu");
		
	} 
	
	//drawImage
	GUI.Box(Rect(nImageStartX,nImageStartY,nImageWidth,nImageHeight),"");
	switch( nSelectedStage)
	{
	 	case 0:
			if ( picStage_0 != null)
			{
				GUI.DrawTexture( new Rect(nImageStartX,nImageStartY,nImageWidth,nImageHeight), picStage_0 ); 
			}
			break;
		case 1:
			if ( picStage_1 != null)
			{
				GUI.DrawTexture( new Rect(nImageStartX,nImageStartY,nImageWidth,nImageHeight), picStage_1 ); 
			}
			break;
		case 2:
 			if ( picStage_2 != null)
			{
				GUI.DrawTexture( new Rect(nImageStartX,nImageStartY,nImageWidth,nImageHeight), picStage_2 ); 
			}
			break;
		case 3:
 			if ( picStage_3 != null)
			{
				GUI.DrawTexture( new Rect(nImageStartX,nImageStartY,nImageWidth,nImageHeight), picStage_3 ); 
			}
			break;
		case 4:
 			if ( picStage_4 != null)
			{
				GUI.DrawTexture( new Rect(nImageStartX,nImageStartY,nImageWidth,nImageHeight), picStage_4 ); 
			}
			break;
		case 5:
 			if ( picStage_5 != null)
			{
				GUI.DrawTexture( new Rect(nImageStartX,nImageStartY,nImageWidth,nImageHeight), picStage_5 ); 
			}
			break;

	}
}
function Update () {
}