var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var Rfield = document.getElementById("Rfield");
var form = document.getElementById("Trigger");
form.addEventListener("submit", function (event) {
    if (num1.value && num2.value) {

        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);
        //alert(x/y*100);
        //another method 
        var result = x / y;
        var percent = result * 100;
        Rfield.innerText = "Answer " + percent + "%";
        event.preventDefault();
    } else {
        alert("Please enter values in the field");
    }
});

// num1.value = "test";
// Rfield.innerText = "Test2";