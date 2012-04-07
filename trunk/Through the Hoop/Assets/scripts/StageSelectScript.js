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

private var hasSelectedLevel:boolean = false;
private var levelToLoad:String;

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

private var nPage: int;
public var nTotalStages : int = 9;
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
	
	nPage = 0;

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
	GUI.Box (Rect (10,Screen.height * .01,Screen.width - 20, Screen.height - (Screen.height * .01 *2)), "Stage Select");

	//stagebox
	var recStageBox = Rect (nButtonBoxStartX,Screen.height * .02f,nButtonBoxWidth,Screen.height - (Screen.height * .02f *2));
	GUI.Box (recStageBox,"");
	
	
	var recSelectBox = new Rect(nButtonStartX_Stage + (nButtonNextX_Stage * nSelectedStage) - 5, nButtonStartY_Stage + ((nButtonNextY_Stage * nSelectedStage)/2) -5, nButtonSizeX_Stage + 10, nButtonSizeY_Stage + 10);
	//select box
	//GUI.Box(Rect(nButtonStartX_Stage + (nButtonNextX_Stage * nSelectedStage) - 5, nButtonStartY_Stage + ((nButtonNextY_Stage * nSelectedStage)/2) -5, nButtonSizeX_Stage + 10, nButtonSizeY_Stage + 10),"");
	
	var rectSelectionArea = new Rect (recStageBox.x + (Screen.width * .01f ), recStageBox.y + (Screen.height * .01f),
				recStageBox.width - (Screen.width * .02f ), recStageBox.height - (Screen.height * .02f) );
	
	//GUI.Box(rectSelectionArea,"testarea");
	
	GUILayout.BeginArea(rectSelectionArea,"test");
	if (GUILayout.Button("Back",GUILayout.Height(rectSelectionArea.height / 7.3f )))
	{
		if(nPage > 0)
			nPage --;
	}
	
	var nLevelStart = (nPage * 5);
	

	for(var nI = 0; nI < 5; ++nI)
	{
		var nCurrentButtonLevel: int = nLevelStart + 1 + nI;
		if(nCurrentButtonLevel <= nTotalStages)
		{
			if (GUILayout.Button("Level " + (nCurrentButtonLevel),GUILayout.Height(rectSelectionArea.height / 7.3f )))
			{
				nSelectedStage = nCurrentButtonLevel -1;
			}
		}
		else
		{
			GUILayout.Box("", GUILayout.Height(rectSelectionArea.height / 7.3f ));
		}
	
	}
	

	//GUILayout.Button("Level " + (nCurrentButtonLevel),GUILayout.Height(rectSelectionArea.height / 7.3f ));
	
	//GUILayout.Button("Level " + (nCurrentButtonLevel),GUILayout.Height(rectSelectionArea.height / 7.3f ));
	
	//GUILayout.Button("Level " + (nCurrentButtonLevel),GUILayout.Height(rectSelectionArea.height / 7.3f));
	
	//GUILayout.Button("Level " + (nCurrentButtonLevel),GUILayout.Height(rectSelectionArea.height / 7.3f));
	
	//GUILayout.Button("Level " + (nCurrentButtonLevel),GUILayout.Height(rectSelectionArea.height / 7.3f));
	
	
	if( GUILayout.Button("Next",GUILayout.Height(rectSelectionArea.height / 7.3f)))
	{
		if(nTotalStages > ((nPage+1) *5))
		{
			nPage ++;
		}
	}

	GUILayout.EndArea();
	
	if(false)
	{
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
	}
	//Go
	//if(false)
	if(GUI.Button(Rect(nButtonStartX_GO-200,nButtonStartY_GO, nButtonSizeX_GO,nButtonSizeY_GO),"Start"))
	{
	 	switch( nSelectedStage)
		{
		 	case 0:
					levelToLoad = szStage_0;
				break;
			case 1:
					levelToLoad = szStage_1;
	 
				break;
			case 2:
					levelToLoad = szStage_2;
					break;
			case 3:
					levelToLoad = szStage_3;
	 				break;
	 		case 4:
					levelToLoad = szStage_4;
	 				break;
	 		case 5:
					levelToLoad = szStage_5;
	 				break;		
	
		}
		hasSelectedLevel = true;
	}
	
	//back
	//if(false)
	if(GUI.Button(Rect(nImageStartX,nButtonStartY_Back, nButtonSizeX_Back,nButtonSizeY_Back),"Back"))
	{
		//go back to main menu 
		levelToLoad = "MainMenu";
		hasSelectedLevel = true;
	} 
	
	//drawImage
	var szStageName :String= "";
	var rectImageBox = Rect(nImageStartX,nImageStartY,nImageWidth,nImageHeight);
	
	switch( nSelectedStage)
	{
	 	case 0:
			if ( picStage_0 != null)
			{
				GUI.DrawTexture( rectImageBox, picStage_0 ); 
				szStageName = szStage_0;
			}
			break;
		case 1:
			if ( picStage_1 != null)
			{
				GUI.DrawTexture( rectImageBox, picStage_1 ); 
				szStageName = szStage_1;
			}
			break;
		case 2:
 			if ( picStage_2 != null)
 			{
				GUI.DrawTexture( rectImageBox, picStage_2 ); 
				szStageName = szStage_2;
			}
			break;
		case 3:
 			if ( picStage_3 != null)
 			{
				GUI.DrawTexture( rectImageBox, picStage_3 ); 
				szStageName = szStage_3;
			}
			break;
		case 4:
 			if ( picStage_4 != null)
 			{
				GUI.DrawTexture(rectImageBox, picStage_4 ); 
				szStageName = szStage_4;
			}
			break;
		case 5:
 			if ( picStage_5 != null)
 			{
				GUI.DrawTexture( rectImageBox, picStage_5 ); 
				szStageName = szStage_5;
			}
			break;

	}

	var rectSelectedStageBox : Rect = Rect ( nImageStartX,nImageStartY - (Screen.height * .05f),nImageWidth , Screen.height *0.04f);
	GUI.Box(rectSelectedStageBox, szStageName);
				
	
	
}
function Update () {
	if( hasSelectedLevel && Application.CanStreamedLevelBeLoaded( levelToLoad ) ) {
    	Application.LoadLevel( levelToLoad );
    }
}