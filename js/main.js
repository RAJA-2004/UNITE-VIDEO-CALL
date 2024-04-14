import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "YOUR_KEY",
    authDomain: "YOUR_ID",
    projectId: "YOUR_ID",
    storageBucket: "YOUR_ID",
    messagingSenderId: "YOUR_ID",
    appId: "YOUR_ID"
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
