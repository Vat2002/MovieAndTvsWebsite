//product name,price,relesed date,discription,image location
const productList=[
	["Loki",23,"23/10/2020","","images/Loki-Poster-Ogsize.jpg"],
	["Falcon and Winter Soldier",24,"15/10/2020","","images/Falcon-and-Winter-Soldier-poster-resize.jpg"],
	["Peaky Blinders",50,"05/01/1999","","images/Peaky-Blinders-Poster-resize.jpg"],
	["Money Heist",78,"03/01/2000","","images/Money-Heist-Poster-resize.jpg"],
	["Naruto",12,"25/09/2013","","images/Naruto-Poster-resize.jpg"],
	["Dragon Ball",12,"25/09/2013","","images/dragon-ball-z-battle-of-gods-poster-resize.jpg"],
	["Demon Slayer",12,"25/09/2013","","images/Demon-Slayer-Poster-resize.jpg"],
	["Jujutsu kaisen",12,"25/09/2013","","images/Jujutsu-kaisen-Poster-resize.jpg"]
];

//dislay products
var displayProduct="";
for (let i=0;i<productList.length;i++){
	var name=productList[i][0];
	var price=productList[i][1];
	var releasedate=productList[i][2];
	//var description=productList[i][3];
	var imglocation=productList[i][4];//change this later
	//console.log(name,price);
	displayProduct+=
	"<div class=\"card\">"+
	"<img src=\""+imglocation+"\"class=\"imgWidth\" alt=\""+name+"\">"+
	"<div class=\"container\"><span style=\"font-size:18px;\">"+name+"</span><br>"+
	"<span class=\"reldate\"> Release Date : "+releasedate+"</span><br>"+
	"<span class=\"price\">Price : &pound;"+price+"</span><br>"+
	"<button id=\"addtocart\" class=\"btn\" value=\""+i+"\" onclick=\"add2cart(this.value)\">Add to cart</button>"+
	"</div></div>";
}

const itemno=[];//items that added to the cart
const itemquantity=[];//iteems quantitys
const incartlist=[];//dispying items
var totalPrice=0;
//const indexincartlist=[];
//dispaly product in product page
function add2cart(id){
	var name=productList[id][0];
	var price=productList[id][1];
	var imglocation=productList[id][4];//change this later
	var totalquantity=1;
	var item;

	
	if (itemno.includes(id)){//check item is already availble in list
		var index=itemno.indexOf(id);
		var quantity=itemquantity[index];
		item=itemincart(name,imglocation,quantity,price);
		totalquantity=quantity;
		totalquantity++;
		itemquantity[index]=totalquantity;
		console.log("ava",itemno,itemquantity);

		var index2=incartlist.indexOf(item);
		incartlist[index2]=itemincart(name,imglocation,itemquantity[index],price);
		console.log("q:"+itemquantity[index]+"\nindex2:"+index2+"\n"+incartlist[index2]);
	}else{
		item=itemincart(name,imglocation,totalquantity,price);
		itemno.push(id);
		itemquantity.push(totalquantity);
		incartlist.push(item);
		console.log(itemno,itemquantity);
	}

	totalPrice+=price;
	
	//console.log(id,price);
	//console.log(incartlist);
	//alert(id);
}

//display product as a list in overlay cart 
function itemincart(name,imglocation,totalquantity,price){

	return "<tr><td width=\"200px\"><img src=\""+imglocation+"\" class=\"imgWidth\" alt=\""+name+"\"></td>"+
	"<td style=\"width: 100%;\">Name : "+name+"<br>Quantity: "+totalquantity+
	"<priceoncard>&pound; "+price+"<br></priceoncard>"+
	"</tr>";

}

//display the cart in overlay fx 
function printcart(){
	//console.log(incartlist);
	if(incartlist.length>0){
		document.getElementById("incartitem").innerHTML=incartlist.join("");
		document.getElementById("placeorderbtn").style.removeProperty("display");
		document.getElementById("resetbtn").style.removeProperty("display");
		document.getElementById("price").innerHTML="&pound; "+totalPrice;
	}else{
		document.getElementById("incartitem").innerHTML="<h1 style=\"text-align: center;\">Cart is empty.<h1>";
		document.getElementById("placeorderbtn").style.display = "none";
		document.getElementById("resetbtn").style.display = "none";
	}
	document.getElementById("overlay").style.display = "block";
}console.log(incartlist);

//turn off the overlay fx
function off() {
  document.getElementById("overlay").style.display = "none";
}
//reset the cart,all the items and price
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

//
function formforInvoice(frm){
	var error=false;
	var fname=frm.fname.value;
	var lname=frm.lname.value;
	var addressl1=frm.addressl1.value;
	var addressl2=frm.addressl2.value;
	var addressl3=frm.addressl3.value;
	var phoneno=frm.phoneno.value;
	var email=frm.email.value;
	var deliverymessage=frm.deliverymessage.value;

	//console.log("4nno>>"+phoneno+" len>>"+phoneno.length);
	
	//check user input is wrong or not and let user know where the error is
	if (fname===""||fname==="undefined"){
		error=true;
		//console.log("1");
		document.getElementById("fname").style.border="2px solid red";
	}

	if (lname===""||lname==="undefined"){
		document.getElementById("lname").style.border="2px solid red";
		//console.log("2");
		error=true;
	}

	if (addressl1===""||addressl1==="undefined"){
		document.getElementById("addressl1").style.border="2px solid red";
		//console.log("3");
		error=true;
	}

	if (addressl2===""||addressl2==="undefined"){
		document.getElementById("addressl2").style.border="2px solid red";
		//console.log("4");
		error=true;
	}

	if (addressl3===""||addressl3==="undefined"){
		document.getElementById("addressl3").style.border="2px solid red";
		//console.log("5");
		error=true;
	}

	if (phoneno===""||phoneno==="undefined"){
		document.getElementById("phoneno").style.border="2px solid red";
		//console.log("6");
		error=true;
	}else if(phoneno.length!=10){
		error=true;
		document.getElementById("phoneno").style.border="2px solid red";
		alert("Phone number max length is 10.\nPlease enter the correct one");
	}

	if (email===""||email==="undefined"){
		document.getElementById("email").style.border="2px solid red";
		error=true;
	}

	if (deliverymessage===""||deliverymessage==="undefined"){
		deliverymessage="No delivery note";
	}

	if (error){//display the error msg
		alert("Fill in all the details correctly to place the order");
	}else if(confirm("Are you sure?")){
		displayinvoice(fname,lname,addressl1,addressl2,addressl3,phoneno,email,deliverymessage);
	}

}

//display the invoice as overlat fx
function displayinvoice(fname,lname,addressl1,addressl2,addressl3,phoneno,email,deliverymessage){
	//displaying user details
	document.getElementById("firstname").innerHTML=fname;
	document.getElementById("lastname").innerHTML=lname;
	document.getElementById("addressl1span").innerHTML=addressl1;
	document.getElementById("addressl2span").innerHTML=addressl2;
	document.getElementById("addressl3span").innerHTML=addressl3;
	document.getElementById("phonenumber").innerHTML=phoneno;
	document.getElementById("Emali").innerHTML=email;
	document.getElementById("diliverynote").innerHTML=deliverymessage;
	//generating invoice table
	var invoiceitem="<tr>"+
						"<th>Product ID</th>"+
						"<th>Product Name</th>"+
						"<th>Quantity</th>"+
						"<th>Price</th>"+
					"</tr>";
	//Adding product details to the table
	for(let i=0;i<itemno.length;i++){
		invoiceitem+="<tr>"+
						"<td>"+itemno[i]+"</td>"+//priduct id	
						"<td>"+productList[itemno[i]][0]+"</td>"+//product name
						"<td>"+itemquantity[i]+"</td>"+//product Quantity
						"<td> &pound; "+productList[itemno[i]][1]+"</td>"+//product price
					"</tr>";
	}

	//add total price to the table
	invoiceitem+="<tr>"+
					"<td colspan=\"3\" class=\"totalbill\">Total Bill</td>"+
					"<td id=\"displaytotalprice\" class=\"totalbill\"> &pound; "+totalPrice+"</td>"+
				"</tr>"
	//console.log(totalPrice);
	document.getElementById("invoicetable").innerHTML=invoiceitem;//add invoice details to html
	document.getElementsByClassName("overlayforinvoice")[0].style.display="block";//displaying invoice 
}

document.getElementById("showProduct").innerHTML=displayProduct;
