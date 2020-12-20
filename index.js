let screen = document.getElementById("screen");
let screenValue = '';
buttons = document.querySelectorAll("button");
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText =="*"){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
            screenValue = screen.value;
            

        }
        else if(buttonText =='C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText =='CE'){
           
            screen.value = screen.value.slice(0,-1);
            screenValue = screen.value;
            

        }
        
        else{
            screenValue += buttonText;
            screen.value = screenValue;
            
        }


    })
}