import { loggingAccount } from "./api.js"

function formValidation() {

    const inputsRegister = [...document.querySelectorAll(".input-form")]
    const buttonRegister = document.querySelector(".button-login")

    let formValidation = 0

    setInterval(function teste(){
        inputsRegister.forEach(element => {
            if(element.value == null || element.value == "") {
                formValidation -= 1
            } else {
                formValidation += 1
            }
    })
    if(formValidation == 2) {
        buttonRegister.disabled = false
        buttonRegister.id = ""
    } else {
        buttonRegister.disabled = true
        buttonRegister.id = "button-register-disabled"
    }
    formValidation = 0
    }, 100)
}

function loginUser() {
    const formLogin = document.querySelector(".form-login")
    const inputForm = [...document.querySelectorAll(".input-form")]

    formLogin.addEventListener("submit", (event) => {
        event.preventDefault()
        const email = inputForm[0].value
        const password = inputForm[1].value

        loggingAccount({
            email,
            password
        })
    })
}

export { loginUser, formValidation }