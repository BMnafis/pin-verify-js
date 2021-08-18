// Functions for Genereating pin & showing on the left side
function getPin(){
    // get the random number
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    // condition for showing 4 digits pin
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

// main function
function generatePin(){    
    const pin = getPin();

    // show the pin into input value
    document.getElementById('generate-input').value = pin;

}

// Functions for type pin & showing on the right side & comparison between 2 pin

document.getElementById('key-parent').addEventListener('click', function(event){
    // get the currrent value by using event.target
    const number = event.target.innerText;
    const keyInput = document.getElementById('key-input');
    
    if(isNaN(number)){
        if(number == 'C'){
            keyInput.value = '';
        }
    }else{
        const previousNumber = keyInput.value;
        const newNumber = previousNumber + number;
        keyInput.value = newNumber;
    }
})

// Pin verification
function verifyPin(){
    const generatedPin = document.getElementById('generate-input').value;
    const typedPin = document.getElementById('key-input').value;

    if(generatedPin == typedPin){
        document.getElementById('noti-success').style.display = 'block';
        document.getElementById('noti-error').style.display = 'none';
    }else{
        document.getElementById('noti-success').style.display = 'none';
        document.getElementById('noti-error').style.display = 'block';
    }
}