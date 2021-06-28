const names=["ND Kooragamage","M.A  Zahir","N.V.V De Dilva","P.R.A.U Pallemulla"];
var srtNames="";
names.forEach(printNames);
function printNames(val,index){
	srtNames+="<h4 id=\"name"+ index+"\">"+val+"</h4>";
}
document.getElementById("displayNames").innerHTML=srtNames;
function animation(){
	document.getElementById("displayNames").classList.remove("position");
	document.getElementById("displayNames").classList.add("positionchange");
	document.getElementById("title").classList.add("positionchange");
}
setTimeout(animation,4000);
setTimeout(function(){location.href="homepage.html"},4200);
