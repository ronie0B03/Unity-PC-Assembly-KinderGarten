 var currentMusicTime:float;
 
 function Start(){
    DontDestroyOnLoad(gameObject);
 }
 
 function Update(){
    currentMusicTime=GetComponent.<AudioSource>().time;
 }
 
 function OnLevelWasLoaded(lvl:int){
    GetComponent.<AudioSource>().time=currentMusicTime;
 }