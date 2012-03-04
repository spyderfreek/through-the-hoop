private var fChangeTime:float;
public var fChangeDuration: float = 1.0f;

private var fStillTime:float;
public var fStillDuration:float = 3.0f;


private var nState:int = 0;

public var SplashImage : Texture;
public var szNextScene:String;

public var bStayOnStillUntilInput:boolean = false;

function OnEnable(){
	fChangeTime  = 0.0f;
	fStillTime  = 0.0f;
}

function OnGUI(){
	var nColorVar:float = (fChangeTime / fChangeDuration);

 	GUI.color = new Color(nColorVar, nColorVar,nColorVar, 1);
	GUI.DrawTexture( new Rect(0, 0, Screen.width, Screen.height ), SplashImage );
	
}

function Update () {

	if(nState == 0)
	{
		//fade to image
		fChangeTime += Time.deltaTime;
		
		if(fChangeTime >= fChangeDuration)
		{
			fChangeTime = fChangeDuration;
			nState = 1;
		}
			
	}
	if(nState == 1)
	{
	//still image
		if(bStayOnStillUntilInput == false)
			fStillTime += Time.deltaTime;
		
		//check input
		if(Input.anyKey)
		{
			fStillTime = fStillDuration;
		}
		
		if(fStillTime >= fStillDuration)
		{
			fStillTime = fStillDuration;
			nState = 2;
		}
	}
	
	if(nState == 2)
	{
		//fade to black
		fChangeTime -= Time.deltaTime;
		if(fChangeTime <= 0 && Application.CanStreamedLevelBeLoaded(szNextScene) )
		{
			//change to another
			Application.LoadLevel(szNextScene);
			
		}
		else if( fChangeTime <= 0 )
		{
			fChangeTime = 0;
		}
		
	}
	
	
}