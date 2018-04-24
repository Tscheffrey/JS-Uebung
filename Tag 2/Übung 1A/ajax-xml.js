function  fetchMessage()
{
  ajax  =  new  XMLHttpRequest();
  ajax.open("GET","https://www.christoph-dietrich.de/daten-xml.php", true);
  ajax.onreadystatechange =  function(){
    //  Kommunikation  beendet
    if(this.readyState ==  4) {
      //  HTTP-Rückmeldung  erfolgreich  (200)
      if(this.status ==  200)  {
        //  Hier  vervollständigen,  um  erhaltende  Antwort  als  Text  in  „ausgabe“  auszugeben:
        var  antwortObjekt  = this.responseXML;
        document.getElementById("ausgabe").innerText = antwortObjekt.documentElement.childNodes[0].nodeValue;
      }
      else  {
        alert("Es  ist  ein  Fehler  aufgetreten!");
      }
    }
  }
  ajax.send();
}
