var a = prompt("Enter your name:");
var b = prompt("Enter password: (dd-mm-yyyy)");
if (a == "m" && b == "m") {
	window.location.href = "Start.html";
}
else {
	alert("Wrong name or DateofBirth");
	window.location.href = "index.html";
}
