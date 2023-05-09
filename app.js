const evidencesCards = document.querySelectorAll(".evidence");
const buttonPrev = document.querySelector("#prev");
const buttonNext = document.querySelector("#next");

const slideToNext = () => {
    buttonNext.style.display = "none";
    buttonPrev.style.display = "block";

    evidencesCards.forEach(evidence => {
        evidence.style.transform = "translateX(-105%)";
    })
}

const slideToPrev = () => {
    buttonNext.style.display = "block";
    buttonPrev.style.display = "none";

    evidencesCards.forEach(evidence => {
        evidence.style.transform = "translateX(0)";
    })
}

buttonPrev.addEventListener("click", slideToPrev)
buttonNext.addEventListener("click", slideToNext)