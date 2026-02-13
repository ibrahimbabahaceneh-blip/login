const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("passwordConfirmation")
//labels
const usernameLabel = document.getElementById("usernameLabel")
const emailLabel = document.getElementById("emailLabel")
const passwordLabel = document.getElementById("passwordLabel")
const passwordConfirmationLabel = document.getElementById("passwordConfirmationLabel")

const errorsBox = document.getElementById("errorBox")
// wrong index
let usernameWrong = false
let emailWrong = false
let passwordWrong = false
let darkMode = false


function usernameErrorDisplay(){
    username.style.borderColor = "red"
    usernameLabel.style.color = "red"
    usernameWrong = true
}
function emailErrorDisplay(){
    email.style.borderColor = "red"
    emailLabel.style.color = "red"
    emailWrong = true
}
function passwordErrorDisplay(){
    password.style.borderColor = "red"
    passwordLabel.style.color = "red"
    passwordConfirmation.style.borderColor = "red"
    passwordConfirmationLabel.style.color = "red"
    passwordWrong = true
}

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let usernameErrors = []
    let emailErrors = []
    let passwordErrors = []
    const regex = /[^A-Za-z0-9_.\-#]+$/
    if(username.value === "" ){
        usernameErrorDisplay()
        usernameErrors.push("-username is required <br>")
    } else if(String(username.value).length < 8){
        usernameErrorDisplay()
        usernameErrors.push("-username must be at leats 8 charachters <br>")
    } else if(String(username.value).length > 20){
        usernameErrorDisplay()
        usernameErrors.push("-username can't have more than 20 charachters <br>")
    } else if(regex.test(username.value)){
        usernameErrorDisplay()
        usernameErrors.push("username can't have any special characters <br>")
    }else {
        username.style.borderColor = "lightgrey" 
        usernameLabel.style.color = "black"
        usernameWrong = false
        if(darkMode){
            usernameLabel.style.color = "white"
        }
    }

    if(email.value === ""){
        emailErrorDisplay()
        emailErrors.push("-email is reqiured <br>")
    } else if( !String(email.value).endsWith("@gmail.com")){
        emailErrorDisplay()
        emailErrors.push("invalid email from <br>")
    } else {
        email.style.borderColor = "lightgrey"
        emailLabel.style.color = "black"
        emailWrong = false
        if(darkMode){
            emailLabel.style.color = "white"
        }
    }

    if(password.value === ""){
        passwordErrorDisplay()
        passwordErrors.push("-password is required <br>")
    }else if(password.value !== "" && passwordConfirmation.value === ""){
        passwordConfirmation.style.borderColor = "red"
        passwordConfirmationLabel.style.color = "red"
        passwordErrors.push("-password confirmation is reaquired <br>")
    } else if(String(password.value).toLocaleLowerCase === "password"){
        passwordErrorDisplay()
        passwordErrors.push("-password can't be 'password' <br>")
    }else if(String(password.value) < 10){
        passwordErrorDisplay()
        passwordErrors.push("password maust be at least 10 characters")
    } else if(String(password.value).length > 20){
        passwordErrorDisplay()
        passwordErrors.push("password can't have more than 20 characters")
    } else if( password.value !== passwordConfirmation.value){
        passwordErrorDisplay()
        passwordErrors.push("-passwords doen't match ")
    }else{
        password.style.borderColor = "lightgrey"
        passwordLabel.style.color = "black"
        passwordConfirmation.style.borderColor = "lightgrey"
        passwordConfirmationLabel.style.color = "black"
        passwordWrong = false
        if(darkMode){
            passwordLabel.style.color = "white"
            passwordConfirmationLabel.style.color = "white"
        }
    }

    if (usernameErrors.length > 0 || emailErrors.length > 0 || passwordErrors.length > 0) {
        errorsBox.style.visibility = "visible";
        errorsBox.innerHTML = usernameErrors.join(""); 
        errorsBox.innerHTML += emailErrors.join("");
        errorsBox.innerHTML += passwordErrors.join("")
    }else {
        errorsBox.style.visibility = "hidden";
        errorsBox.innerHTML = ""; 
    }
})

const menu = document.getElementById("menu")
const menuBox = document.getElementById("menuBox")
let menuOpened = false

function openMenu(){
    if(!menuOpened){
        menu.style.visibility = "visible"
        menuOpened = true
    }else{
        menu.style.visibility = "hidden"
        menuOpened = false
    }
}
menuBox.addEventListener("click", (event)=>{
    event.stopPropagation()
    openMenu()
})

document.addEventListener("click", event =>{
    if(menuOpened &&  !menu.contains(event.target) && !menu.contains(event.target)){
        menu.style.visibility = "hidden"
        menuOpened = false
    }
})

const body = document.body
const themeBtn = document.getElementById("themeBtn")
const circle = document.getElementById("circle")
const logo = document.getElementById("logo")
const title = document.getElementById("title")
const signUp = document.getElementById("signUp")
const login = document.getElementById("login")
const loginLink = document.getElementById("loginLink")
const inputs = document.getElementsByClassName("inputs")
const labels = document.getElementsByClassName("labels")
const main = document.querySelector("main")
const or = document.getElementById("OR")
const submitBtn = document.getElementById("submitBtn")


themeBtn.addEventListener("click", (event)=>{
    event.stopPropagation()
    if(!darkMode){ // dark mood on
        darkMode = true
        circle.style.transform = "translateX(100%)"
        body.style.backgroundColor = "rgb(20, 20, 20)"
        logo.style.fill = "white"
        title.style.color = "white"
        signUp.style.color = "white"
        main.style.boxShadow = "2px 2px 30px 1px rgb(35, 35, 35)"
        login.style.color = "white"
        loginLink.style.color = "#00beee"
        or.style.backgroundColor = "rgb(20, 20, 20)"
        or.style.color = "white"
        submitBtn.style.backgroundColor = "#1f8500e8"
        submitBtn.style.color = "white"
        errorsBox.style.color = "white"
        Array.from(inputs).forEach((input)=>{
            input.style.backgroundColor = "rgb(20, 20, 20)"
            input.style.color =  "white"
        })
        Array.from(labels).forEach((label)=>{
            label.style.backgroundColor = "rgb(20, 20, 20)"
        })
        if(usernameWrong){
            usernameLabel.style.color = "red"
        }else{
            usernameLabel.style.color = "white"
        }

        if(emailWrong){
            emailLabel.style.color = "red"
        }else{
            emailLabel.style.color = "white"
        }

        if(passwordWrong){
            passwordLabel.style.color = "red"
            passwordConfirmationLabel.style.color = "red"
        }else{
            passwordLabel.style.color = "white"
            passwordConfirmationLabel.style.color = "white"
        }
    } else{ // light mode / dark mood off
        darkMode = false
        circle.style.transform = "translateX(0)"  
        body.style.backgroundColor = "white"   
        logo.style.fill = "black"  
        title.style.color = "black"
        signUp.style.color = "black"
        main.style.boxShadow = "2px 2px 30px 1px rgb(150, 150, 150)"
        login.style.color = "black"
        loginLink.style.color = "#0000EE"
        or.style.backgroundColor = "white"
        or.style.color = "black"
        submitBtn.style.backgroundColor = "rgba(50, 218, 50, 0.702)"
        submitBtn.style.color = "black"
        errorsBox.style.color = "white"
        Array.from(inputs).forEach((input)=>{
            input.style.backgroundColor = "white"
            input.style.color =  "black"
        })
        Array.from(labels).forEach((label)=>{
            label.style.backgroundColor = "white"
        })
        if(usernameWrong){
            usernameLabel.style.color = "red"
        }else{
            usernameLabel.style.color = "black"
        }

        if(emailWrong){
            emailLabel.style.color = "red"
        }else{
            emailLabel.style.color = "black"
        }

        if(passwordWrong){
            passwordLabel.style.color = "red"
            passwordConfirmationLabel.style.color = "red"
        }else{
            passwordLabel.style.color = "black"
            passwordConfirmationLabel.style.color = "black"
        }
    }
})
