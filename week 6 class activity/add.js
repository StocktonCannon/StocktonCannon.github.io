function add() {

    var num1 = parseInt(document.getElementById("num1").value, 10);
    var num2 = parseInt(document.getElementById("num2").value, 10);
    var sum = num1 + num2;
    var container = document.getElementById("container");
    var water = document.getElementById("water");

    var max = 100;
    var height = (sum / max) * 300;
    var heightStyle = height + "px";
    water.style.height = heightStyle;
    water.innerHTML = sum + "ml";
    
}


