let daynames = ["Sunday", "Monday", "Tuesday", "Wednesday",
 "Thursday", "Friday", "Saturday"];

let months = ["January", "Febuary", "March", "April",
 "May", "June", "July", "August", "September",
  "October", "November", "December"];

let d = new Date();

let dayname = daynames[d.getDay()];
let month = months[d.getMonth()];
let year = d.getFullYear();

let fulldate = dayname + ", " + month + " " + d.getDate() + ", " + year;
/* Only want year */
document.getElementById("year").textContent = "© " + year;

/*Last modified date*/
let modDate = document.lastModified;
document.getElementById("modify-date").textContent = "Last Updated:" + modDate; 
