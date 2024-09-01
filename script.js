// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
//     count ++;
//     countLabel.textContent = count;
// };
// resetBtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// };
// decreaseBtn.onclick = function(){
//     count --;
//     countLabel.textContent = count;
// };

const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }

    catch(error){
        display.value = "error";
    }
}