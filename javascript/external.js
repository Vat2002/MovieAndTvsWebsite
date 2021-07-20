var myButton=document.getElementById("topButton");


//when the user scrolls more than 50px from the top of the page, show the button
//(https://www.w3schools.com/howto/howto_js_scroll_to_top.asp)
window.onscroll=function(){scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        myButton.style.display="block";
    }
    else{
        myButton.style.display="none";
    }
}
//when user click top button
function topFunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}