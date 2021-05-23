

var currentDate = new Date();
currentDate.toString;
var b = currentDate.toString();
var day = b.slice(0,3);



if (day == "Fri"){
    let pancakemsg = document.getElementById("pancakeswrapper");
    pancakemsg.style.display = "block";
}