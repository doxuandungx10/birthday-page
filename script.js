var a = prompt("Enter your name:");
var b = prompt("Enter your date of birth: (dd-mm-yyyy)");
if (a == "Tran Thi Kieu May" && b == "17-09-2001") {
	window.location.href = "Start.html";
}
else {
	alert("Wrong name or DateofBirth");
	window.location.href = "index.html";
}
