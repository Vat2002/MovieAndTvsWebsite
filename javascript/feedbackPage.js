function checkData(){
    //get user enter data values
    fname=document.getElementById("fname").value;
    lname=document.getElementById("lname").value;
    telNum=document.getElementById("telNum").value;
    email=document.getElementById("email").value;
    textarea=document.getElementById("enterQuery").value;
 
    //if radio buttons are checked
     //(https://www.w3schools.com/jsref/prop_radio_checked.asp)
     var radioButton1=document.getElementById("feedback").checked;
     var radioButton2=document.getElementById("query").checked;
     var radioButton3=document.getElementById("product").checked;
     var radioButton4=document.getElementById("gallery").checked;
     var radioButton5=document.getElementById("quiz").checked;
     var radioButton6=document.getElementById("tvseriesnanime").checked;
 
     
     var Completed = true;
 
     var Choice;
 
     if (fname=='' || lname==''){
         
         document.getElementById("firstName").innerHTML="Please enter the First Name";
         Completed = false;
     }
     if(lname==''){
         document.getElementById("lastName").innerHTML="Please enter the Last Name";
         Completed = false;
     }
     if(telNum==''){
         document.getElementById("contactNum").innerHTML="Please enter the Contact Number";
         Completed = false;
     }
     if (email==''){
         
         document.getElementById("emailAddress").innerHTML="Please enter the Email Address";
         Completed = false;
     }
 
     if (radioButton1==false && radioButton2==false && radioButton3==false && radioButton4==false && radioButton5==false&&radioButton6==false){
         
         document.getElementById("radioButtonSet").innerHTML="Please select the type of query";
         Completed = false;
     }
     else{
         if (radioButton1 == true){
             Choice = 'feedback';
         }
         else if (radioButton2 == true){
             Choice = 'query';
         }
         else if (radioButton3 == true){
             Choice = 'product';
         }
         else if (radioButton4 == true){
             Choice = 'gallery';
         }
         else if(radioButton5 == true){
             Choice = 'quiz';
         }
         else if(radioButton6 == true){
             Choice='tvseriesnanime';
         }
     }
 
     if (textarea == ''){
    
         document.getElementById("queryBox").innerHTML="Please enter the query details";
         Completed = false;
     } 
     //(https://www.w3schools.com/howto/howto_css_overlay.asp)
     else if(Completed== true){
         document.getElementById('beginForm').style.display = 'none';
         document.getElementById('formOverlay').innerHTML =
         "<div class='overlayData'><p class='inputData'>Name: " + fname+" "+lname+
         "</p>"+
         "<p class='inpuData'>Contact Number:"+telNum+"</p>"+
         "<p class='inputData'>Email: " + email+"</p>"+
         "<p class=radioButtonSet>Type:"+Choice+"</p>"+
         "<p class='enterQueryText'>Your query:"+textarea+"</p>"+
         "<button class=' submitButton editButton' onClick='editForm()'><b>Edit</b></button> <button class='newButton' onclick='Submit()'>"+
         "<b>Send</b></button>"+
         "</div>"; 
     }
 }
 
 function editForm(){
     document.getElementById('beginForm').style.display = 'block';
     document.getElementById('formOverlay').innerHTML = '';
 }
 
 function Submit(){
     document.getElementById('submitButtonHTML').click();
 }







/*if(checkLName==true){
    document.getElementById("lastName").innerHTML="Please enter the Last Name";
}
if(checkTelNum==true){
    document.getElementById("contactNum").innerHTML="Please enter the Contact Number";
}
if(checkEmail==true){
    document.getElementById("emailAddress").innerHTML="Please enter the Email Address";
}
if(checkRadioButton==true){
    document.getElementById("radioButtonSet").innerHTML="Please select the type of query";
}
if(checkTextBox==true){
    document.getElementById("queryBox").innerHTML="Please enter the query details";
}*/