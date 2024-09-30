let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.name-field');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');

signInBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sing In';
    text.innerHTML = 'Lost Password ';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});

signUpBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'Sing Up';
    text.innerHTML = ' Password Suggestions ';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
});

var VOCABULARY = document.getElementsByClassName(".heading1");
        function Vocabulary(){
            VOCABULARY.innerHTML = "VOCABULARY";
        }

        document.addEventListener("DOMContentLoaded", function() {
            Vocabulary();
        });
