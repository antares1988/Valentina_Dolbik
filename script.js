let allBtn = document.getElementById("allBtn")
let illustrationBtn = document.getElementById("illustrationBtn")
let graphyBtn = document.getElementById("graphyBtn")
let UXnBtn = document.getElementById("UXnBtn")
let mainGalleryImage = document.querySelectorAll('.mainGalleryImage')
let illustrationGalery = document.querySelectorAll('.illustrationGalery')
let UXGalery = document.querySelectorAll('.UXGalery')
let graphyGalery = document.querySelectorAll('.graphyGalery')

function showall() {
    for (i = 0; i < mainGalleryImage.length; i++) {
        mainGalleryImage[i].style.display = "flex"
    }
}
function showillustrationBtn() {
    for (i = 0; i < mainGalleryImage.length; i++) {
        mainGalleryImage[i].style.display = "none"
    }
    for (i = 0; i < illustrationGalery.length; i++) {
        illustrationGalery[i].style.display = "flex"
    }
}
function showgraphyBtn() {
    for (i = 0; i < mainGalleryImage.length; i++) {
        mainGalleryImage[i].style.display = "none"
    }
    for (i = 0; i < graphyGalery.length; i++) {
        graphyGalery[i].style.display = "flex"
    }
}
function showUXnBtn() {
    for (i = 0; i < mainGalleryImage.length; i++) {
        mainGalleryImage[i].style.display = "none"
    }
    for (i = 0; i < UXGalery.length; i++) {
        UXGalery[i].style.display = "flex"
    }
}

allBtn.addEventListener("click", showall);
illustrationBtn.addEventListener("click", showillustrationBtn);
graphyBtn.addEventListener("click", showgraphyBtn);
UXnBtn.addEventListener("click", showUXnBtn);



// menu

