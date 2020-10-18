//fuction open or cloth more information about projects
function MoreProject() {
    var moreDots = document.getElementById("moreDots");
    var moreText = document.getElementById("moreText");
    var moreButton = document.getElementById("moreButton");
   

    if (moreDots.style.display === "none") {
        moreDots.style.display = "inline";
        moreButton.innerHTML = "WIĘCEJ";
        moreText.style.display = "none";
    } else {
        moreDots.style.display = "none";
        moreButton.innerHTML = "MNIEJ";
        moreText.style.display = "inline";
    }
}

jQuery(document).ready(function ($) {
    var sections = $('section')
        , nav = $('nav')
        , nav_height = nav.outerHeight()+10;
    $(window).on('scroll', function () {
        var position = $(this).scrollTop();
        sections.each(function () {
            var topSection = $(this).offset().top - nav_height,
                bottomSection = topSection + $(this).outerHeight() ;
            if (position >= topSection && position <= bottomSection) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');
                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });
});



