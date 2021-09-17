$(function () {
    var head4 = $("#head4");
    var head5 = $("#head5");
    var head6 = $("#head6");
    var button1 = $("#button1");
    var button2 = $("#button2")
    var btn_no = $("#btn_no");
    var btn_yes2 = $("#btn_yes2")

    // head5.hide();
    button1.on({
        click: function () {
            // btn_no.hide()
            // btn_yes2.css("display", "inline-block")
            // btn_yes2.css("color", "#fff")
            // btn_yes2.css("background-color", "rgb(94, 28, 110)")
            document.getElementById("troll").play()
            head4.fadeOut(3000)
            button1.fadeOut(1500);
            button2.fadeOut(1500);
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
            btn_no.hide()
            btn_yes2.css("display", "inline-block")
            btn_yes2.css("color", "#fff")
            button2.css("background-color", "rgb(94, 28, 110)")
            document.getElementById("troll").play()
            head4.fadeOut(3000)
            button1.fadeOut(1500);
            button2.fadeOut(1500);
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
