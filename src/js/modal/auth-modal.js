const openAuthModal = document.querySelector(".js-open");
const closeAuthModal = document.querySelector(".js-close");
const authModal = document.querySelector(".js-auth-modal");

const signUp = document.querySelector('.signUp_now__link');
const signIn = document.querySelector(".signIn_now__link")
const nameInput = document.querySelector('.auth-modal__name');
const checkbox = document.querySelector('.auth-modal__wrap_checkbox');
const formTitleIn = document.querySelector('.auth-modal__titleIn');
const formTitleUp = document.querySelector('.auth-modal__titleUp');
const btnConfirm = document.querySelector('.auth-modal__button_confirm');
const btnRegister = document.querySelector('.auth-modal__button_register');
const signUpNow = document.querySelector('.signUp_now');
const signInNow = document.querySelector('.signIn_now');

openAuthModal.addEventListener("click", toggleModal);
closeAuthModal.addEventListener("click", toggleModal);


function toggleModal() {
authModal.classList.toggle("is-hidden");
}

signUp.addEventListener("click", openRegisterForm)

function openRegisterForm(evt) {
evt.preventDefault();
nameInput.classList.remove("visually-hidden");
checkbox.classList.remove("visually-hidden");
formTitleIn.classList.add("visually-hidden");
formTitleUp.classList.remove("visually-hidden");
btnConfirm.classList.add("visually-hidden");
btnRegister.classList.remove("visually-hidden");
signUpNow.classList.add("visually-hidden");
signInNow.classList.remove("visually-hidden");
}

signIn.addEventListener("click", openAuthForm)

function openAuthForm(evt) {
    evt.preventDefault();
    nameInput.classList.add("visually-hidden");
    checkbox.classList.add("visually-hidden");
    formTitleIn.classList.remove("visually-hidden");
    formTitleUp.classList.add("visually-hidden");
    btnConfirm.classList.remove("visually-hidden");
    btnRegister.classList.add("visually-hidden");
    signUpNow.classList.remove("visually-hidden");
    signInNow.classList.add("visually-hidden");
    }   
