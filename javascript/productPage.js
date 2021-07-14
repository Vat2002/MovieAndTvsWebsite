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
	var imglocation=productList[0][4];//change this later
	//console.log(name,price);
	displayProduct+=
	"<div class=\"card\">"+
	"<img src=\""+imglocation+"\"class=\"imgWidth\">"+
	"<div class=\"container\">Name : "+name+"<br>"+
	"Price : &pound;"+price+"<br>"+
	"Release Date : "+releasedate+"<br>"+
	"<button id=\"addtocart\" style=\"margin: 10px;\" value=\""+i+"\" onclick=\"add2cart(this.value)\">Add to cart</button>"+
	"</div></div>";
	//"Description : "+description+"</br>";
	//console.log(document.getElementById("addtocart").value);
};

//var productid;
const itemno=[];//items that added to the cart
const itemquantity=[];//iteems quantitys
const incartlist=[];//dispying items
//const indexincartlist=[];
var totalPrice=0;
//document.getElementById("showProduct").innerHTML=productList;
function add2cart(id){
	var name=productList[id][0];
	var price=productList[id][1];
	var imglocation=productList[0][4];//change this later
	var totalquantity=1;
	var item;
	var index;
	
	
	if (itemno.includes(id)){//check item is already availble in list
		index=itemno.indexOf(id);
		var quantity=itemquantity[index];
		item=itemincart(name,imglocation,quantity,price);
		totalquantity=quantity;
		totalquantity++;
		itemquantity[index]=totalquantity;
		console.log("ava",itemno,itemquantity);

		index2=incartlist.indexOf(item);
		incartlist[index2]=itemincart(name,imglocation,itemquantity[index],price);
		console.log("q:"+itemquantity[index]+"\nindex2:"+index2+"\n"+incartlist[index2]);
	}else{
		item=itemincart(name,imglocation,totalquantity,price);
		itemno.push(id);
		itemquantity.push(totalquantity);
		incartlist.push(item);
		//indexincartlist.push(templist);
		console.log(itemno,itemquantity);
	}

	totalPrice+=price;
	
	//productid=parseInt(document.getElementById("addtocart").value);
	console.log(id,price);
	//console.log(incartlist);
	//alert(id);
}

function itemincart(name,imglocation,totalquantity,price){

	return "<tr><td width=\"20%\"><img src=\""+imglocation+"\"></td>"+
	"<td style=\"\">Name : "+name+"<br>Quantity: "+totalquantity+
	"<priceoncard>&pound; "+price+"<br></priceoncard>"+
	"</tr>";

}

function printcart(){
	list=incartlist.valueOf();
	console.log(incartlist);
	if(incartlist.length>0){
		document.getElementById("incartitem").innerHTML=incartlist.join("");
		document.getElementById("placeorderbtn").style.removeProperty("display");
		document.getElementById("resetbtn").style.removeProperty("display");
		document.getElementById("price").innerHTML="&pound;"+totalPrice;
	}else{
		document.getElementById("incartitem").innerHTML="<h1 style=\"text-align: center;\">Cart is empty.<h1>";
		document.getElementById("placeorderbtn").style.display = "none";
		document.getElementById("resetbtn").style.display = "none";
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
		itemno.pop();
		itemquantity.pop();
	}

	totalPrice=0;
	document.getElementById("price").innerHTML="";
	printcart();
}

function printInvoice(frm){
	var fname=frm.fname.value;
	var lname=frm.lname.value;
	var addressl1=frm.addressl1.value;
	var addressl2=frm.addressl2.value;
	var addressl3=frm.addressl3.value;
	var phoneno=frm.phoneno.value;
	var email=frm.email.value;
	var deliverymessage=frm.deliverymessage.value;

	console.log(frm);
}

function isempty(data,nameofdata){
	if (data==""||data=="undefined"){
		alert("somting worng in form");
	}
}

//var productid=document.getElementById("add2cart").name;
//alert(productid);
//document.getElementById("addtocart").addEventListener("click",add2cart)
document.getElementById("showProduct").innerHTML=displayProduct;
//document.getElementById("incartitem").innerHTML=incartlist.join("");
//document.getElementById("incartitem").innerHTML=list;