var firstDay = new Date("2020-06-22"); // Start date
var today = new Date();
var diffInMs = today - firstDay;
var yearsOfExp = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
document.getElementById("experience").textContent = yearsOfExp.toFixed(1);