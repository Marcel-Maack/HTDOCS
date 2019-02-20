console.log("Übung 1");
var cities = ["Rom","München","Lisabon","Warschau","Oslo","Paris","Berlin","Moskau"]

window.onload = los;


function los(){    
    var btns = document.getElementsByTagName("button");
    var divs = document.getElementsByTagName("div");
    btns[0].onclick = function(){
      divs[0].innerHTML = cities.join(",");
    }
    btns[1].onclick = function(){
      divs[1].innerHTML =slcCittiesZweib;
    }
    btns[2].onclick = function(){
      divs[2].innerHTML =slcCittiesZweic; 
    }   

var slcCities = cities.join(",");
console.log(slcCities);
console.log("--------oder--------");
var citiesSTR = cities.toString(); //oder
console.log(citiesSTR);

console.log("Übung 2a");
var slcCittiesZwei = cities.join("");
console.log(slcCittiesZwei);

console.log("Übung 2b");
var slcCittiesZweib = cities.join(" ");
console.log(slcCittiesZweib);

console.log("Übung 2c");
var slcCittiesZweic = cities.join("-");
console.log(slcCittiesZweic);

console.log("Übung 3");
//var slpCities = cities.splice(cities.indexOf("Moskau"),1);
//console.log(slpCities);
//console.log(cities);
var poCities = cities.pop();
console.log(poCities);
console.log(cities);

console.log("Übung 4");
//var splCities = cities.splice(0,0, "Leningrad");
//console.log(cities);
console.log(cities.unshift("Leningrad"));
console.log(cities);

console.log("Übung 5");
var slpCities = cities.splice(cities.indexOf("Oslo"),1);
console.log(cities);

console.log("Übung 6");
var splCities = cities.splice(1,1, "Wien");
console.log(cities);

console.log("Übung 7");
var sorCities = cities.sort()
console.log(sorCities);

console.log("Übung 8");
var slccities = cities.slice(1,4);
console.log(slccities);
}