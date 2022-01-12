var x = 145

var x = 110


// var x = document.getElementById("header");

// var x = document.createElement("header")

// document.getElementById('header')

    // alert(myWeight)
    // test = parseFloat(myHeight) * parseFloat(myWeight);

function myFunction() {

    var myHeight, myWeight;
    
    myHeight = document.getElementById('height').value;

    myWeight = document.getElementById("weight").value;

    var bmi = (parseFloat(myWeight)/parseFloat(myHeight) * parseFloat(myHeight))* 703

    test = parseFloat(myHeight) * parseFloat(myWeight);

    // alert(bmi)

    if (myWeight < 115) {
        document.getElementById("header").innerHTML = "Your under weight!";
    } else if (myWeight > 145) {
        document.getElementById("header").innerHTML ="Your over weight!";
    } else{
        document.getElementById("header").innerHTML = "Your Healthy!";
    }
};
