function  fetchMessage()
{
  ajax  =  new  XMLHttpRequest();
  ajax.open("GET","https://www.christoph-dietrich.de/daten-json.php", true);
  ajax.onreadystatechange =  function(){
    //  Kommunikation  beendet
    if(this.readyState ==  4) {
      //  HTTP-Rückmeldung  erfolgreich  (200)
      if(this.status ==  200)  {
        console.log(this);

        //  Hier  vervollständigen,  um  erhaltende  Antwort  als  Text  in  „ausgabe“  auszugeben:
        var  antwortObjekt  = JSON.parse(this.responseText);
        console.log(antwortObjekt);
        document.getElementById("ausgabe").innerText = antwortObjekt.message;
      }
      else  {
        alert("Es  ist  ein  Fehler  aufgetreten!");
      }
    }
  }
  ajax.send();
}
