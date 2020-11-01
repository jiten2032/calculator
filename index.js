function input(buttons){
if(buttons=='Del'){
    document.getElementById("screen").value='';
}
else if(buttons=='C'){
document.getElementById("screen").value=document.getElementById("screen").value.substring(0,document.getElementById("screen").value.length-1)
}
else if(buttons=='X'){
    buttons="*";  
    document.getElementById("screen").value=document.getElementById("screen").value+buttons;
}


else if(buttons=='='){
    document.getElementById("screen").value=eval(document.getElementById("screen").value);
}

   else{
         document.getElementById("screen").value=document.getElementById("screen").value+buttons;
    
   }


}



