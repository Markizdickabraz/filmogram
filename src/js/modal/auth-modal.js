import { auth, onRegister } from "../firebase";
import { onSignIn } from "../firebase";

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
const authForm = document.querySelector('.auth-modal__form');

openAuthModal.addEventListener("click", openModalA);
closeAuthModal.addEventListener("click", closeModalA);
authModal.addEventListener("click", backdropClick)

function toggleModal() {
authModal.classList.toggle("is-hidden");
}

function openModalA(evt) {
    evt.preventDefault();
    toggleModal();
    document.addEventListener('keydown', escClick);
    document.body.style.overflow = 'hidden';
    closeAuthModal.addEventListener('click', closeModalA);
    authModal.addEventListener('click', backdropClick);
}
export function closeModalA() {
    authModal.classList.add('is-hidden');
    closeAuthModal.removeEventListener('click', closeModalA);
  document.body.removeAttribute('style');
    }

    function backdropClick(evt) {
        if (evt.currentTarget === evt.target) {
          document.body.removeAttribute('style');
          toggleModal();
          document.removeEventListener('keydown', escClick);
          authModal.removeEventListener('click', backdropClick);
        }
      }

      function escClick(evt) {
        const ESK_KEY_CODE = 'Escape';
        const isEscKey = evt.code == ESK_KEY_CODE;
        if (isEscKey) {
          toggleModal();
          document.removeEventListener('keydown', escClick);
          closeAuthModal.removeEventListener('click', closeModalA);
          authModal.removeEventListener('click', backdropClick);
        }
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
authForm.addEventListener('submit', onRegister);
authForm.removeEventListener('submit', onSignIn);
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
    authForm.addEventListener('submit', onSignIn);
    authForm.removeEventListener('submit', onRegister);
    }   
