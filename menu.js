$('nav a').on('click', function () {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

})

$(window).scroll(function () {

    if ($(this).scrollTop() < $('section[data-anchor="home"]').offset().top) {
        $('nav a').removeClass('active');
    }

    if ($(this).scrollTop() >= $('section[data-anchor="home"]').offset().top) {
        $('nav a').removeClass('active');
        $('nav a:eq(0)').addClass('active');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="about"]').offset().top) {
        $('nav a').removeClass('active');
        $('nav a:eq(1)').addClass('active');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="projects"]').offset().top) {
        $('nav a').removeClass('active');
        $('nav a:eq(2)').addClass('active');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="contact"]').offset().top) {
        $('nav a').removeClass('active');
        $('nav a:eq(3)').addClass('active');
    }

});