//fuction open or cloth more information about projects
function MoreProjectOne() {
    var moreDotsOne = document.getElementById("moreDotsOne");
    var moreTextOne = document.getElementById("moreTextOne");
    var moreButtonOne = document.getElementById("moreButtonOne");
   

    if (moreDotsOne.style.display === "none") {
        moreDotsOne.style.display = "inline";
        moreButtonOne.innerHTML = "WIĘCEJ";
        moreTextOne.style.display = "none";
    } else {
        moreDotsOne.style.display = "none";
        moreButtonOne.innerHTML = "MNIEJ";
        moreTextOne.style.display = "inline";
    }
}
function MoreProjectTwo() {
    var moreDotsTwo = document.getElementById("moreDotsTwo");
    var moreTextTwo = document.getElementById("moreTextTwo");
    var moreButtonTwo = document.getElementById("moreButtonTwo");


    if (moreDotsTwo.style.display === "none") {
        moreDotsTwo.style.display = "inline";
        moreButtonTwo.innerHTML = "WIĘCEJ";
        moreTextTwo.style.display = "none";
    } else {
        moreDotsTwo.style.display = "none";
        moreButtonTwo.innerHTML = "MNIEJ";
        moreTextTwo.style.display = "inline";
    }
}
function MoreProjectOneEN() {
    var moreDotsOneEN = document.getElementById("moreDotsOne");
    var moreTextOne = document.getElementById("moreTextOne");
    var moreButtonOne = document.getElementById("moreButtonOne");


    if (moreDotsOne.style.display === "none") {
        moreDotsOne.style.display = "inline";
        moreButtonOne.innerHTML = "WIĘCEJ";
        moreTextOne.style.display = "none";
    } else {
        moreDotsOne.style.display = "none";
        moreButtonOne.innerHTML = "MNIEJ";
        moreTextOne.style.display = "inline";
    }
}
function MoreProjectTwoEN() {
    var moreDotsTwo = document.getElementById("moreDotsTwo");
    var moreTextTwo = document.getElementById("moreTextTwo");
    var moreButtonTwo = document.getElementById("moreButtonTwo");


    if (moreDotsTwo.style.display === "none") {
        moreDotsTwo.style.display = "inline";
        moreButtonTwo.innerHTML = "WIĘCEJ";
        moreTextTwo.style.display = "none";
    } else {
        moreDotsTwo.style.display = "none";
        moreButtonTwo.innerHTML = "MNIEJ";
        moreTextTwo.style.display = "inline";
    }
}
//change active element in menu
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
//send button





