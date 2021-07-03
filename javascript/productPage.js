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
var incartlist=[];
//document.getElementById("showProduct").innerHTML=productList;
function add2cart(id){
	//productid=parseInt(document.getElementById("addtocart").value);
	incartlist.push(parseInt(id));
	console.log(id);
	//console.log(incartlist);
	//alert(id);
}
list="";
function printcart(){
	for (let i=0;i<incartlist.length;i++){
		list+=productList[incartlist[i]]+"\n";
	}
	alert(incartlist+"\n"+list);
}
//var productid=document.getElementById("add2cart").name;
//alert(productid);
//document.getElementById("addtocart").addEventListener("click",add2cart)
document.getElementById("showProduct").innerHTML=displayProduct;