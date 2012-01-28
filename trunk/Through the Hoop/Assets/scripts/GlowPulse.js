var glowWidth:float = 0.7;
var glowDev:float = 0.2;
var timeScale:float = 1.0;

function Update () {
	GetComponent(GlowEffect).blurSpread = Mathf.PingPong(Time.time / timeScale, glowDev) - glowDev/2 + glowWidth;
}