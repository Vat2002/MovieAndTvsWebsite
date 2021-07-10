//product name,price,relesed date,discription,image location
const productList=[
	["name1",23,"23/10/2020","ksdgkjagsdkhfgakyusgdckjvasdyugakjsdgfk","images/thumbnail/imag1.png"],
	["name2",24,"15/10/2020","ksdgkjkfkfkagsdkhfgakyusgdckjvasdyugakjsdgfk",""],
	["name3",50,"05/01/1999","ksdgkjkfkfkagsdkhfgakyusgdckjvasdyugakjsdgfk",""],
	["name4",78,"03/01/2000","ksdgkjkfkfkagsdkhfgakyusgdckjvasdyugakjsdgfk",""],
	["name5",12,"25/09/2013","ksdgkjkfkfkagsdkhfgakyusgdckjvasdyugakjsdgfk",""]
];

//dislay products
var displayProduct="";
for (let i=0;i<productList.length;i++){
	var name=productList[i][0];
	var price=productList[i][1];
	var releasedate=productList[i][2];
	//var description=productList[i][3];
	var imglocation=productList[0][4];
	//console.log(name,price);
	displayProduct+=
	"<div class=\"card\">"+
	"<img src=\""+imglocation+"\"class=\"imgWidth\">"+
	"<div class=\"container\">Name : "+name+"<br>"+
	"Price : $"+price+"<br>"+
	"Release Date : "+releasedate+"<br>"+
	"<button id=\"addtocart\" style=\"margin: 10px;\" value=\""+i+"\" onclick=\"add2cart(this.value)\">Add to cart</button>"+
	"</div></div>";
	//"Description : "+description+"</br>";
	//console.log(document.getElementById("addtocart").value);
};

//var productid;
const incartlist=[];
var totalPrice=0;
//document.getElementById("showProduct").innerHTML=productList;
function add2cart(id){
	var name=productList[id][0];
	var price=productList[id][1];
	var imglocation=productList[0][4];
	var item;
	item="<tr><td width=\"20%\"><img src=\""+imglocation+"\"></td>"+
	"<td style=\"\">Name : "+name+
	"<priceoncard>$"+price+"<br></priceoncard>"+
	/*"<br><button onclick=\"\" style=\"float: right;\">remove</button></td>"+*/
	"</tr>";
	totalPrice+=price;
	//productid=parseInt(document.getElementById("addtocart").value);
	incartlist.push(item);
	console.log(id,price);
	//console.log(incartlist);
	//alert(id);
}

function printcart(){
	list=incartlist.valueOf();
	console.log(incartlist);
	if(incartlist.length>0){
		document.getElementById("incartitem").innerHTML=incartlist.join("");
		document.getElementById("placeorderbtn").style.display = "block";
		document.getElementById("price").innerHTML="$"+totalPrice;
	}else{
		document.getElementById("incartitem").innerHTML="<h1 style=\"text-align: center;\">Cart is empty.<h1>";
		document.getElementById("placeorderbtn").style.display = "none";
	}
	document.getElementById("overlay").style.display = "block";
}console.log(incartlist);

/*function on() {
  document.getElementById("incartitem overlay").style.display = "block";
}*/

function off() {
  document.getElementById("overlay").style.display = "none";
}

function resetthecart(){
	while(incartlist.length>0){
		incartlist.pop();
	}
	window.totalPrice=0;
	printcart();
}

//var productid=document.getElementById("add2cart").name;
//alert(productid);
//document.getElementById("addtocart").addEventListener("click",add2cart)
document.getElementById("showProduct").innerHTML=displayProduct;
//document.getElementById("incartitem").innerHTML=incartlist.join("");
//document.getElementById("incartitem").innerHTML=list;