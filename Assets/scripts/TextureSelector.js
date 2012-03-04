var texture : Texture;

function Awake () {
	if(texture) gameObject.renderer.material.mainTexture = texture;
}