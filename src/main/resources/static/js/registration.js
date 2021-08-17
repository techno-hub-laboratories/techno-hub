let signupDisplayBtn = document.getElementById('signupDisplayBtn');
let loginDisplayBtn = document.getElementById('loginDisplayBtn');

let signup = document.getElementById('signup');
let login = document.getElementById('login');

signupDisplayBtn.addEventListener('click', () => {
    signup.style.display = "block";
    login.style.display = "none";
})


loginDisplayBtn.addEventListener('click', () => {
    signup.style.display = "none";
    login.style.display = "block";
})