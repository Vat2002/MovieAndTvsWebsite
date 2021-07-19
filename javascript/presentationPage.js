//4s animation
setTimeout(function(){
  document.getElementById("overlay").style.opacity = "0";
  setTimeout(function(){document.getElementById("overlay").style.display = "none";},200);
},4000);

const names=["ND Kooragamage","M.A  Zahir","N.V.V De Dilva","P.R.A.U Pallemulla"];
var srtNames="";//string variable for display name
names.forEach(printNames);
function printNames(val,index){
	srtNames+="<h4 id=\"name"+ index+"\">"+val+"</h4>";
}

document.getElementById("displayNames").innerHTML=srtNames;
//names animation
var time=0;
for (let i=0;i<4;i++){
	time+=500;
	setTimeout(function(){document.getElementById("name"+i).classList.add("box")},time);
	setTimeout(function(){document.getElementById("name"+i).classList.remove("box")},time+500);
	setTimeout(function(){document.getElementById("name"+i).classList.add("boxremove")},time+500);
}
