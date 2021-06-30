//product name,price,relesed date,discription,image location
const productList=[
	["name1",23,"23/10/2020","ksdgkjagsdkhfgakyusgdckjvasdyugakjsdgfk","images/thumbnail/imag1.png"],
	["name2",24,"15/10/2020","ksdgkjkfkfkagsdkhfgakyusgdckjvasdyugakjsdgfk",""],
	["name3",50,"05/01/1999","ksdgkjkfkfkagsdkhfgakyusgdckjvasdyugakjsdgfk",""],
	["name4",78,"03/01/2000","ksdgkjkfkfkagsdkhfgakyusgdckjvasdyugakjsdgfk",""],
	["name5",12,"25/09/2013","ksdgkjkfkfkagsdkhfgakyusgdckjvasdyugakjsdgfk",""],
	["name5",12,"25/09/2013","ksdgkjkfkfkagsdkhfgakyusgdckjvasdyugakjsdgfk",""],
	["name5",12,"25/09/2013","ksdgkjkfkfkagsdkhfgakyusgdckjvasdyugakjsdgfk",""],
	["name5",12,"25/09/2013","ksdgkjkfkfkagsdkhfgakyusgdckjvasdyugakjsdgfk",""],
	["name5",12,"25/09/2013","ksdgkjkfkfkagsdkhfgakyusgdckjvasdyugakjsdgfk",""],
	["name5",12,"25/09/2013","ksdgkjkfkfkagsdkhfgakyusgdckjvasdyugakjsdgfk",""],
	["name5",12,"25/09/2013","ksdgkjkfkfkagsdkhfgakyusgdckjvasdyugakjsdgfk",""],
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
	"Release Date : "+releasedate+"<br></div></div>";
	//"Description : "+description+"</br>";
};

//document.getElementById("showProduct").innerHTML=productList;
document.getElementById("showProduct").innerHTML=displayProduct;