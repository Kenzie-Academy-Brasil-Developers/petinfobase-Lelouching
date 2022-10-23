function accountCreated() {

    const body = document.querySelector("body")
    let modal = document.createElement("div")
    let divModal = document.createElement("div")
    let imageCheck = document.createElement("img")
    let spanMessage = document.createElement("span")
    let spanMessage2 = document.createElement("span")
    let LinkToLogin = document.createElement("a")

    modal.classList.add("modal", "flex", "flex-column")
    divModal.classList.add("div-modal", "flex", "align-i-center")
    imageCheck.classList.add("image-mark-check")
    spanMessage.classList.add("modal-message-1")
    spanMessage2.classList.add("modal-message-2")
    LinkToLogin.classList.add("access-login-page", "anchor-style-none")

    imageCheck.src = "../../assets/img/check.svg"
    imageCheck.alt = "Sucesso"
    spanMessage.innerText = "Sua conta foi criada com sucesso!"
    spanMessage2.innerText = "Agora você pode acessar os conteúdos utilizando seu usuário e senha na página de login: "
    LinkToLogin.innerText = "Acessar página de login"
    LinkToLogin.href = "../../index.html"

    body.appendChild(modal)
    modal.append(divModal, spanMessage2)
    divModal.append(imageCheck, spanMessage)
    spanMessage2.appendChild(LinkToLogin)

    setTimeout(() => {
        modal.classList.remove("flex")
    }, 10000)
}



function postDeleted() {

    const body = document.querySelector("body")
    let modal = document.createElement("div")
    let divModal = document.createElement("div")
    let imageCheck = document.createElement("img")
    let spanMessage = document.createElement("span")
    let spanMessage2 = document.createElement("span")

    modal.classList.add("modal", "flex", "flex-column")
    divModal.classList.add("div-modal", "flex", "align-i-center")
    imageCheck.classList.add("image-mark-check")
    spanMessage.classList.add("modal-message-1")
    spanMessage2.classList.add("modal-message-2")

    imageCheck.src = "../../assets/img/check.svg"
    imageCheck.alt = "Sucesso"
    spanMessage.innerText = "Post deletado com sucesso!"
    spanMessage2.innerText = "O post selecionado para exlusão foi deletado, a partir de agora não aparecerá no seu feed"

    body.appendChild(modal)
    modal.append(divModal, spanMessage2)
    divModal.append(imageCheck, spanMessage)

    setTimeout(() => {
        modal.classList.remove("flex")
    }, 5000)
}

function userNotFound() {
    const body = document.querySelector("body")
    let modal = document.createElement("div")
    let divModal = document.createElement("div")
    let spanMarkX = document.createElement("span")
    let spanMessage = document.createElement("span")
    let spanMessage2 = document.createElement("span")
    let LinkToLogin = document.createElement("a")

    modal.classList.add("modal", "flex", "flex-column")
    divModal.classList.add("div-modal", "flex", "align-i-center")
    spanMarkX.classList.add("mark-x", "flex", "align-i-center")
    spanMessage.classList.add("modal-message-1")
    spanMessage2.classList.add("modal-message-2")
    LinkToLogin.classList.add("access-login-page", "anchor-style-none")

    spanMarkX.innerText = "X"
    spanMessage.innerText = "Sua conta não foi encontrada."
    spanMessage.id = "text-alert"
    spanMessage2.innerText = "Caso ainda não tenha criado uma conta: "
    LinkToLogin.innerText = "Acessar página de cadastro"
    LinkToLogin.href = "./pages/register/index.html"

    body.appendChild(modal)
    modal.append(divModal, spanMessage2)
    divModal.append(spanMarkX, spanMessage)
    spanMessage2.appendChild(LinkToLogin)

    setTimeout(() => {
        modal.classList.remove("flex")
    }, 10000)
}

export { accountCreated, postDeleted, userNotFound }