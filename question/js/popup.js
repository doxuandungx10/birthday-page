
status = "Mr.Linhkool"
var a = new Array(), n = ""
a[1] = 'Y';
a[2] = 'e';
a[3] = 's';
a[4] = 's';
a[5] = 's';
a[6] = 's';
a[7] = '!';
a[8] = '!';
a[9] = '!';
a[10] = '!';
a[11] = ' ';
a[12] = 'I';
a[13] = ' ';
a[14] = 'a';
a[15] = 'm';
a[16] = ' ';
a[17] = 'y';
a[18] = 'o';
a[19] = 'u';
a[20] = 'r';
a[21] = ' ';
a[22] = 'o';
a[23] = 'w';
a[24] = 'n';
a[25] = ' ';
a[26] = 's';
a[27] = 't';
a[28] = 'u';
a[29] = 'p';
a[30] = 'i';
a[31] = 'd';
a[32] = ' ';
a[33] = 'd';
a[34] = 'o';
a[35] = 'g';
a[36] = ' ';
a[37] = 'h';
a[38] = 'i';
a[39] = 'h';
a[40] = 'i';
a[41] = '♥';
a[42] = '♥';
a[43] = '♥';
a[44] = '♥';
a[45] = '♥';
a[46] = '♥';
a[47] = '♥';
function one() {
	t = document.f.txt.value
	j = t.length
	if (j > 0) {
		for (var i = 1; i <= j; i++) {
			n = n + a[i]
			if (i == 48) {
				document.f.txt.value = ""
				n = ""
			}
		}
	}
	document.f.txt.value = n
	n = ""
	setTimeout("one()", 1)
}
function s() {
}
function on() {
	one()
}

$(document).ready(function () {
	$('#k').hide();
	$('h1').click(function () {
		$('.active').removeClass('active');
		$('#k').slideUp('fast');
		if ($(this).next('#k').is(':hidden') == true) {
			$(this).addClass('active');
			$(this).next('#k').slideDown('fast');
		}
	});
});
function Yeu() {
	$("#divResult").fadeOut(0);
	$("#divResult").html("</br><h2>Hahaha you were tricked again <img src='img/icon.gif'></img>!</h2>");
	$("#divResult").fadeIn(2000, function () {
		$("#divResult2").fadeOut(0);

		$("#divResult2").html("<img src='img/mei.jpg' style='width: 50px, height: 50px'></img>");
		$("#divResult2").fadeIn(1000);
		// 	$("#divResult3").fadeOut(0);
		// 	$("#divResult3").html("<p>Dù sau này có như thế nào hãy luôn bên anh và yêu anh như thế này em nhé!</p></br>");
		// 	$("#divResult3").fadeIn(2000);
		// }
		// );
	}
	);
	setTimeout("location.href = '../intro2/Intro2.html';", 5000);

}
