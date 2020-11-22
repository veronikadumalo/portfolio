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
function MoreProjectThree() {
    var moreDotsThree = document.getElementById("moreDotsThree");
    var moreTextThree = document.getElementById("moreTextThree");
    var moreButtonThree = document.getElementById("moreButtonThree");


    if (moreDotsThree.style.display === "none") {
        moreDotsThree.style.display = "inline";
        moreButtonThree.innerHTML = "WIĘCEJ";
        moreTextThree.style.display = "none";
    } else {
        moreDotsThree.style.display = "none";
        moreButtonThree.innerHTML = "MNIEJ";
        moreTextThree.style.display = "inline";
    }
}
function MoreProjectOneEN() {
    var moreDotsOneEN = document.getElementById("moreDotsOneEN");
    var moreTextOneEN = document.getElementById("moreTextOneEN");
    var moreButtonOneEN = document.getElementById("moreButtonOneEN");


    if (moreDotsOneEN.style.display === "none") {
        moreDotsOneEN.style.display = "inline";
        moreButtonOneEN.innerHTML = "MORE";
        moreTextOneEN.style.display = "none";
    } else {
        moreDotsOneEN.style.display = "none";
        moreButtonOneEN.innerHTML = "LESS";
        moreTextOneEN.style.display = "inline";
    }
}
function MoreProjectTwoEN() {
    var moreDotsTwoEN = document.getElementById("moreDotsTwoEN");
    var moreTextTwoEN = document.getElementById("moreTextTwoEN");
    var moreButtonTwoEN = document.getElementById("moreButtonTwoEN");


    if (moreDotsTwoEN.style.display === "none") {
        moreDotsTwoEN.style.display = "inline";
        moreButtonTwoEN.innerHTML = "MORE";
        moreTextTwoEN.style.display = "none";
    } else {
        moreDotsTwoEN.style.display = "none";
        moreButtonTwoEN.innerHTML = "LESS";
        moreTextTwoEN.style.display = "inline";
    }
}

function MoreProjectThreeEN() {
    var moreDotsThreeEN = document.getElementById("moreDotsThreeEN");
    var moreTextThreeEN = document.getElementById("moreTextThreeEN");
    var moreButtonThreeEN = document.getElementById("moreButtonThreeEN");


    if (moreDotsThreeEN.style.display === "none") {
        moreDotsThreeEN.style.display = "inline";
        moreButtonThreeEN.innerHTML = "MORE";
        moreTextThreeEN.style.display = "none";
    } else {
        moreDotsThreeEN.style.display = "none";
        moreButtonThreeEN.innerHTML = "LESS";
        moreTextThreeEN.style.display = "inline";
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
//send 





