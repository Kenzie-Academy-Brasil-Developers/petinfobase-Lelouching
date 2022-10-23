import { creatingAccount } from "./api.js"

function formValidation() {

    const inputsRegister = [...document.querySelectorAll(".input-form")]
    const buttonRegister = document.querySelector(".button-register")

    let formValidation = 0

    setInterval(function teste(){
        inputsRegister.forEach(element => {
            if(element.value == null || element.value == "") {
                formValidation -= 1
            } else {
                formValidation += 1
            }
    })
    if(formValidation == 4) {
        buttonRegister.disabled = false
        buttonRegister.id = ""
    } else {
        buttonRegister.disabled = true
        buttonRegister.id = "button-register-disabled"
    }
    formValidation = 0
    }, 100)
}

function registerUser() {
    const formRegister = document.querySelector(".form-register")
    const inputsRegister = [...document.querySelectorAll(".input-form")]

    formRegister.addEventListener("submit", (event) => {
        event.preventDefault()
        const username = inputsRegister[0].value
        const email = inputsRegister[1].value
        const avatar = inputsRegister[2].value
        const password = inputsRegister[3].value

        creatingAccount({
            username,
            email,
            avatar,
            password
        })
    })
}

export { formValidation, registerUser }