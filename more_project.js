
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
