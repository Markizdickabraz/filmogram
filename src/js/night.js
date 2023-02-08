const brightnessBtn = document.querySelector('.brightness__btn');
const darkMedia = window.matchMedia('(prefers-color-scheme: dark)');


function onDarkClick() {
    if (darkMedia.matches) {
        document.body.classList.add('dark');
        brightnessBtn.style.fill = '$red-font-color'
    } else {
        document.body.classList.remove('dark');
        brightnessBtn.style.fill = '$white-font-color'
    }
}
onDarkClick();

darkMedia.addListener(event => {
    document.body.classList.add('dark');

    const onDark = event.matches;

    if (onDark === false) {
        document.body.classList.remove('dark');
    }
});


brightnessBtn.addEventListener("click", () => document.body.classList.toggle("dark"));



















// Не работает
// const bodyDark = document.querySelector(".body-dark");
// const containerDark = document.querySelector(".container-dark");
// const footerTitleDark = document.querySelector(".footer-title__text-dark");
// const filmModalDark = document.querySelector(".film-modal-dark");

// brightnessBtn.addEventListener("click", (event) => {
//      event.preventDefault();
//     bodyDark.classList.toggle("body-dark");
//     containerDark.classList.toggle("container-dark");
//     footerTitleDark.classList.toggle("footer-title__text-dark");
//     filmModalDark.classList.toggle("film-modal-dark");
// });



