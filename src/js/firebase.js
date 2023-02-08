import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, onValue, update, remove } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import Notiflix from 'notiflix';
import { closeModal } from "./modal/auth-modal";


const firebaseConfig = {
    apiKey: "AIzaSyCT3xbHZQ820MQlv13DaR9eYdlGcCeUNEE",
    authDomain: "filmogram-6d876.firebaseapp.com",
    databaseURL: "https://filmogram-6d876-default-rtdb.firebaseio.com",
    projectId: "filmogram-6d876",
    storageBucket: "filmogram-6d876.appspot.com",
    messagingSenderId: "766146491455",
    appId: "1:766146491455:web:e2843b8d054e83cd60748a"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  export const auth = getAuth();
let user;

const myLibrary = document.querySelector("#myLibrary");
const authForm = document.querySelector('.auth-modal__form');
const checkbox = document.querySelector('#checkbox');
const btnRegister = document.querySelector('.auth-modal__button_register');

myLibrary.addEventListener("click", signInMyLibrary)

function signInMyLibrary() {
    if (auth.currentUser === null) {
        myLibrary.removeAttribute('href');
        Notiflix.Notify.failure('Oops, please Sign In first');
    } else {
        myLibrary.setAttribute('href', './library.html');
    };
};

if (authForm) {
    authForm.addEventListener('submit', onSignIn)
}

if (checkbox) {
    checkbox.onchange = function () {
        if (this.checked) {
            btnRegister.classList.remove('disabled_for_signUp')
            btnRegister.removeAttribute('disabled')
        } else {
            btnRegister.classList.add('disabled_for_signUp')
            btnRegister.setAttribute('disabled', 'disabled')
        };
    };
};

export function onSignIn(evt) {
evt.preventDefault();
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;
if (validateEmail(email) === false || validatePassword(password) === false) {
    Notiflix.Notify.failure(`Sorry, the email or password doesn't meet the criteria`);
    return;
};
signInWithEmailAndPassword(auth, email, password)
        .then((userData) => {
            const user = userData.user;
            const dt = new Date();
            update(ref(database, 'users/' + user.uid), {
                last_login: dt,
            });
            closeModal();
            authForm.reset();
            Notiflix.Notify.success('Hello there! Welcome back to Filmoteka!');
        })
        .catch((error) => {
            Notiflix.Notify.failure('Something went wrong with your reqwest, please try again');
        });
    user = auth.currentUser;
};

export function onRegister(evt) { 
    evt.preventDefault();
    const username = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    if (validateEmail(email) === false || validatePassword(password) === false) {
        Notiflix.Notify.failure(`Sorry, the email or password doesn't meet the criteria`);
    return;
    };
    createUserWithEmailAndPassword(auth, email, password)
        .then((userData) => {
            // Registered;
            const user = userData.user;
            set(ref(database, 'users/' + user.uid), {
                username: username,
                email: email
            });
            closeModal();
            authForm.reset();
            Notiflix.Notify.success('Welcome to Filmoteka! Enjoy your movies!');
        })
        .catch((error) => {
            Notiflix.Notify.failure('User with such email already exists!');
        });
    user = auth.currentUser;
};

function validateEmail(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if (expression.test(email) === true) {
        return true;
    } else {
        return false;
    };
};

function validatePassword(password) {
    if (password.length < 6) {
        return false;
    } else {
        return true;
    };
};