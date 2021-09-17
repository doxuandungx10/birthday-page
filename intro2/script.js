$(function () {
    var head4 = $("#head4");
    var head5 = $("#head5");
    var head6 = $("#head6");
    var button1 = $("#button1");
    var button2 = $("#button2")
    // head5.hide();
    button1.on({
        click: function () {
            document.getElementById("troll").play()
            head4.fadeOut(2500)
            button1.fadeOut(1500);
            button2.fadeOut(200);
            //     head4.html("Hehehe. ").delay(3000).fadeIn(3000)
            // }
            // );
            head5.delay(4000).animate(
                {
                    opacity: "1"
                },
                1000
            );
            head5.delay(4000).fadeOut(800);
            head6.delay(10000).animate(
                {
                    opacity: "1"
                },
                1000
            );
            setTimeout("location.href = '../card/Card.html';", 15500);


        }
    });
    button2.on({
        click: function () {
            document.getElementById("troll").play()
            head4.fadeOut(3000)
            button1.fadeOut(1500);
            button2.fadeOut(200);
            head5.delay(4000).animate(
                {
                    opacity: "1"
                },
                1000
            );
            head5.delay(4000).fadeOut(800);
            head6.delay(10000).animate(
                {
                    opacity: "1"
                },
                1000
            );
            setTimeout("location.href = '../card/Card.html';", 15500);
            // head4.html("Hehehe. ").delay(2000).fadeIn(2000)
        }
    });
});
