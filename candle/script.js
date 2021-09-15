$(function () {
    var flame = $("#flame");
    var txt = $("h1");

    flame.on({
        click: function () {
            $("body").css("background", "#1e1934");

            flame.removeClass("burn").addClass("puff");
            $(".smoke").each(function () {
                $(this).addClass("puff-bubble");
            });
            $("#glow").remove();
            txt.hide().html("It <b>will</b> come true..").delay(3000).fadeIn(4000);
            $("body").css("-webkit-transition", "background-color 4.5s linear");
            $("body").css("background", "#be32be");
            // $("body").css("-webkit-transition", "-webkit - gradient(radial, 100 75, 100, 100 75, 0, from(rgba(0, 0, 0, .7)), to(rgba(0, 0, 0, .4))")

            // $("body").css("animation", "fade in 2s")
            // $("body").css(
            //     {
            //         backgroundColor: '#FF0000'
            //     }
            // );
            $("#candle").animate(
                {
                    opacity: ".7"
                },
                2000
            );
            setTimeout("location.href = '../card/Card.html';", 7500);
        }
    });
});
