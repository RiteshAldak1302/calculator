let screen = document.getElementById('screen'); // here we access the input screen element to show the button      text , when we click on the button . 
 buttons = document.querySelectorAll('button');  // query tpo learn important
let  screenValue = ""; // here we declare the screenValue as a string
for(item of buttons) { // this is for of loop 
    item.addEventListener('click', (e)=>{
      buttontext = e.target.innerText;    // imp
      console.log("button text is " + buttontext);
      if(buttontext == 'X'){              // we pass the value as string 
          buttontext = "*";
          screenValue += buttontext; // in this we add the string that is ********.
          screen.value = screenValue;
      }
      else if(buttontext == 'C'){
          screenValue = " ";
          screen.value = screenValue;
      }
      else if( buttontext == '='){
        result = eval(screenValue);  // eval is funtion in js which evalute the value.
        screen.value = result;
        // if(screen.value == result.concat(screenValue))  {
        //     screen.value = eval(result.concat(screenValue))
        // }
    
    }
      else {
          screenValue += buttontext;  // this is for ohter values which is numbers and the operation symbol
          screen.value = screenValue;
      }
})
}
