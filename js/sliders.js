var $links = $('.iteamLinks');


$links.click(function (e)
{
    $links.removeClass("active");
    var clickedlink = e.target;
    clickedlink = $(clickedlink);
    var position = clickedlink.attr("data-pos");
    var translatevalue = "translateX(" + position * 25 + "% )";
    $("#wrapper").css({
          transform : translatevalue

    });

    clickedlink.addClass("active");

});


$($links[0]).addClass("active")
