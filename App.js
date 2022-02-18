let guessNumber = document.getElementById("number")
let check = document.getElementById("check")
let celebrationDiv = document.getElementById("celebration")
let trying = document.getElementById("trying")
let warning = document.getElementById("warning")
let gif = document.getElementById("gif")

let randomNumber = Math.floor((Math.random() * 100) + 1);
console.log(randomNumber); 


check.addEventListener("click", (e)=>{
    if(guessNumber.value<0 || guessNumber.value>100){
        warning.innerHTML = "Plesae enter a number 1 to 100"
        guessNumber.value = "";

    }else if(guessNumber.value>randomNumber){
        trying.innerHTML--;
        celebrationDiv.innerHTML = `${guessNumber.value} is bigger then Lucky number`
        warning.innerHTML = "";
        guessNumber.value = "";
        if (trying.innerHTML == 0){
            celebrationDiv.innerHTML == "YOU LOST!"
            celebrationDiv.style.color == "red";    
        }

    } else if(guessNumber.value<randomNumber){
        trying.innerHTML--;
        celebrationDiv.innerHTML = `${guessNumber.value} is smaller then Lucky number`
        warning.innerHTML = "";
        guessNumber.value = "";
    
        if (trying.innerHTML == 0){
            celebrationDiv.innerHTML == "YOU LOST!"
            celebrationDiv.style.color == "red";
        }

    } else if(parseInt(guessNumber.value) == randomNumber){
        warning.innerHTML = "";
        celebrationDiv.innerHTML = `Gratulation! ${guessNumber.value} is a Lucky number`
        trying.parentElement.innerHTML = "";
        gif.style.backgroundImage = " url(./celebration.gif)"
        
          
    }
    e.preventDefault();
})


