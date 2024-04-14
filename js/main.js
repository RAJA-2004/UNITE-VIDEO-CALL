import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB_R4Hhba_EGjQJF72zUJi4CXlUttrFHcE",
    authDomain: "login-b42f0.firebaseapp.com",
    projectId: "login-b42f0",
    storageBucket: "login-b42f0.appspot.com",
    messagingSenderId: "78038357263",
    appId: "1:78038357263:web:2c4b7f517073e7a1209a7a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-loginBtn");
googleLogin.addEventListener("click",function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "./home.html"
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})

// JavaScript for Dark Mode Toggle Button
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    // Store the user's preference for future visits
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check if the user previously selected dark mode
const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
if (isDarkMode) {
    document.body.classList.add('dark-mode');
}
