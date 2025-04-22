"use strict"
function bmiCal(){
    let userHeight = parseInt(document.getElementById("height").value)/100;
    let userWeight = parseInt(document.getElementById("weight").value);
    let userAge = parseInt(document.getElementById("age").value);
    if(isNaN(userHeight) | isNaN(userWeight)| isNaN(userAge)){
        document.getElementById("bmiData").innerHTML = "Please provide Data";
    }
    else{
        let BMI = userWeight/Math.pow(userHeight,2);
        document.getElementById("bmiData").innerHTML = `your Age is  = ${userAge}<br> calculated BMI = ${BMI}`;
    }
}