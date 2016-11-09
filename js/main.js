


$(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
    return false;
});





$(document).ready(function(){
    $(window).scroll(function(){
        var bo = $("body").scrollTop();
        $('#slogan').text(bo);
        if ( bo > 200 ) { $("#slogan").css("display", "block"); } else { $("#slogan").css("display", "none"); };
    })
})
