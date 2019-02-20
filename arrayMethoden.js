var laender = [];
laender[0] = "Italien";
laender[1] = "Spanien";
laender[2] = "Kroatien";
laender[3] = "Irland";
laender[4] = "Indien";

console.log(laender);       //alle ausgeben
console.log(laender[3]);    //Index 3 ausgeben
laender[3]= "Portugal";     //Index 3 ändern
console.log(laender[3]);    //Index 3 wieder ausgeben

console.log(laender.length); // Länge des Arrays ausgeben

var satz = "Die Katze auf dem Dach";
console.log(satz.length);   //Länge des Satzes
console.log(satz.indexOf("K")); //K kommt an 4 Stelle vor
console.log(satz.indexOf("a", (satz.indexOf("a")+1))); //sucht nach dem naechsten a nach dem ersten

var arA = ["a","b","c","d","e"];
var arB = [1,2,3,4];

//toString()
console.log(arA.toString()); //Ausgae arA Array als String
console.log(arA); // Ausgabe Inhalt arA Array

//join()
var j = arA.join(" + "); // ersetzt hier zB das Komma das bei toString gesetzt wird durch +
console.log(j);

//concat()
var arAB = arA.concat(arB); // fügt Array arA und arB zusammen
console.log(arAB);
console.log(arAB.length); //Länge beider Arrays zusammen hier 9

//pop()
//var arA = ["a","b","c","d","e"];
var z = arA.pop(); //elemeniert das letzte Zeichen "e" 
console.log(z);    //zeigt das elemeniert Zeichen "e" an
console.log(arA); //["a", "b", "c", "d"] neue Ausgabe

// push()
//["a", "b", "c", "d"]
var pu = arA.push("E"); // fügt  ein "E" an das Ende des Array arA ein
console.log(pu); // gibt die neue Länge vom Array an (5)
console.log(arA); // zeigt den neuen Inhalt des Arraya an ["a", "b", "c", "d", "E"]

// shift()
var s = arA.shift(); // entfernt den ersten Wert aus dem Array
console.log(s); //zeig den entfernten Wert an "a"
console.log(arA); // zeigt den neuen Inhalt des Arraya an [ "b", "c", "d", "E"]

// unshift()
var t = arA.unshift("A"); // fügt  ein "A" am Anfang des Array arA ein
console.log(t); //gibt die neue Länge vom Array an (5)
console.log(arA); // zeigt den neuen Inhalt des Arraya an ["A", "b", "c", "d", "E"]

// delete
delete arA[4] //enfert den 5 Wert
console.log(arA); //["A", "b", "c", "d", empty]
console.log(arA[4]); //undefined

// splice()
var obst = ["Bannane","Orange","Apfel","Traube","Mango"];
var spl = obst.splice(2,0, "Himbeere", "Kiwi");//fügt an index 2 neue Werte ein 0 steht für keiner wird gelöscht
console.log(obst);//["Bannane", "Orange", "Himbeere", "Kiwi", "Apfel", "Traube", "Mango"]
console.log(spl); //[]

obst.splice(2,1, "Birne")//fügt an index 2 neue Werte ein 1 steht für ein wert ab index 2 wird gelöscht (Himbeere)
console.log(obst);//["Bannane", "Orange", "Birne", "Kiwi", "Apfel", "Traube", "Mango"]
console.log(obst.indexOf("Kiwi"));
var spl12 = obst.splice(obst.indexOf("Kiwi"),1);// sucht den index mit dem wert "Kiwi" und entfernt ihn 1 = ein wert
console.log(spl12); //["Kiwi"]
console.log(obst); //["Bannane", "Orange", "Birne", "Apfel", "Traube", "Mango"]

// slice()
var slc = obst.slice(2)//ab Index 2 wird alles rauskopiert altes Array bleibt erhalten
console.log(obst); //["Bannane", "Orange", "Birne", "Apfel", "Traube", "Mango"]
console.log(slc); //["Birne", "Apfel", "Traube", "Mango"] neues Array

var farben = ["rot","grün","blau","yellow","cyan","magenta"];
var slcfarben = farben.slice(2,5); //ab Index (inclusive)2 bis exclusive index 5 wird rauskopiert
console.log(slcfarben); //["blau", "yellow", "cyan"]

var satz = "heute gibt es 25 Grad";
var splsatz = satz.split(" "); //Srting wird in ein Array aufgesplittet
console.log(splsatz); //["heute", "gibt", "es", "25", "Grad"] Array mit 5 Werten
var joinSatz = splsatz.join("-"); //Array wird in String wieder mit "-" zusammen geführt 
console.log(joinSatz); //heute-gibt-es-25-Grad







