"use strict"
function bmiCal(){
    let userHeight = parseInt(document.getElementById("height").value)/100;
    let userWeight = parseInt(document.getElementById("weight").value);
    let userAge = parseInt(document.getElementById("age").value);
    if(isNaN(userHeight) | isNaN(userWeight)| isNaN(userAge)){
        let dataPrint = document.getElementById("bmiData");
        dataPrint.innerHTML = "Please provide All Data!".fontcolor('red');
    }
    else{
        let BMI = userWeight/Math.pow(userHeight,2);
        let roundedBmi = BMI.toFixed(2);
        let dataPrintText = document.getElementById("bmiText");
        dataPrintText.innerHTML = "Success!!".fontcolor('green');
        let dataPrint = document.getElementById("bmiData");
        dataPrint.innerHTML  = `your Age = ${userAge}<br> calculated BMI = ${roundedBmi}`;
    }
}
function bmiReset(){
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("age").value = "";
    document.getElementById("bmiData").innerHTML = "";
    document.getElementById("bmiText").innerHTML = "";
    document.getElementById("bmiData").innerHTML = "";
}