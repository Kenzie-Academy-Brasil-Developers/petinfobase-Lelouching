import { renderPosts } from "./render.js"

function creatingPost(sendToApi) {
    const buttonCreate = document.querySelector(".button-create-publication")
    const body = document.querySelector("body")

    buttonCreate.addEventListener("click", () => {

        let modalBlack = document.createElement("section")
        let modalCreate = document.createElement("form")
        let divModalContent = document.createElement("div")
        let creatingNewPost = document.createElement("h2")
        let buttonClose = document.createElement("button")
        let divModalContent2 = document.createElement("div")
        let labelPostTitle = document.createElement("label")
        let inputPostTitle = document.createElement("input")
        let labelPostDescription = document.createElement("label")
        let textAreaPostDescription = document.createElement("textarea")
        let divModalContent3 = document.createElement("div")
        let buttonCancel = document.createElement("button")
        let buttonPost = document.createElement("button")

        modalBlack.classList.add("modal-background", "flex", "justify-center", "container")
        modalCreate.classList.add("form-create-post", "flex", "flex-column")
        divModalContent.classList.add("flex", "align-i-center", "justify-between")
        creatingNewPost.classList.add("creating-post-title")
        buttonClose.classList.add("button-modal-close")
        divModalContent2.classList.add("div-modal-content-2", "flex", "flex-column")
        labelPostTitle.classList.add("label-post-modal")
        labelPostDescription.classList.add("label-post-modal")
        divModalContent3.classList.add("div-modal-content-3", "flex", "justify-end")
        buttonCancel.classList.add("button-cancel")
        buttonPost.classList.add("button-post")

        creatingNewPost.innerText = "Criando novo post"
        buttonClose.innerText = "X"
        buttonClose.type = "button"
        labelPostTitle.innerText = "Título do post"
        labelPostTitle.htmlFor = "input-post-title"
        inputPostTitle.id = "input-post-title"
        inputPostTitle.placeholder = "Digite o título aqui..."
        inputPostTitle.required = true
        inputPostTitle.type = "text"
        labelPostDescription.innerText = "Conteúdo do post"
        labelPostDescription.htmlFor = "input-post-description"
        textAreaPostDescription.id = "input-post-description"
        textAreaPostDescription.placeholder = "Desenvolva o conteúdo do post aqui..."
        textAreaPostDescription.required = true
        buttonCancel.innerText = "Cancelar"
        buttonCancel.type = "button"
        buttonPost.innerText = "Publicar"
        buttonPost.type = "submit"

        body.appendChild(modalBlack)
        modalBlack.appendChild(modalCreate)
        modalCreate.append(divModalContent, divModalContent2, divModalContent3)
        divModalContent.append(creatingNewPost, buttonClose)
        divModalContent2.append(labelPostTitle, inputPostTitle, labelPostDescription, textAreaPostDescription)
        divModalContent3.append(buttonCancel, buttonPost) 

        modalCreate.addEventListener("submit", (event) => {
            event.preventDefault()

            const title = inputPostTitle.value
            const content = textAreaPostDescription.value


            sendToApi({
                title,
                content
            })
            modalBlack.classList.remove("flex")
        })

        modalBlack.addEventListener("click", (event) => {
            if(event.target.classList.contains("modal-background")) {
                modalBlack.classList.remove("flex")
            }
        })
        buttonCancel.addEventListener("click", () => {
            modalBlack.classList.remove("flex")
        })
        buttonClose.addEventListener("click", () => {
            modalBlack.classList.remove("flex")
        })
    })
}

function readCompletePost(data, completeDate) {

    const body = document.querySelector("body")

    let modalBlack = document.createElement("section")
    let modalCompletePost = document.createElement("div")
    let divModalContent = document.createElement("div")
    let divInfo = document.createElement("div")
    let imageUser = document.createElement("img")
    let userName = document.createElement("span")
    let spanSeparate = document.createElement("span")
    let postDate = document.createElement("span")
    let buttonClose = document.createElement("button")
    let div2 = document.createElement("div")
    let postTitle = document.createElement("h2")
    let postDescription = document.createElement("p")

    modalBlack.classList.add("modal-background", "flex", "justify-center", "container")
    modalCompletePost.classList.add("modal-complete-post", "flex", "flex-column")
    divModalContent.classList.add("flex", "align-i-center", "justify-between")
    divInfo.classList.add("div-info-post", "flex", "align-i-center")
    imageUser.classList.add("user-image-post")
    userName.classList.add("user-post-name")
    spanSeparate.classList.add("span-separate")
    postDate.classList.add("post-date")
    buttonClose.classList.add("button-modal-close")
    div2.classList.add("div-content-post", "flex", "flex-column")
    postTitle.classList.add("user-post-title")
    postDescription.classList.add("user-post-description-complete")

    modalCompletePost.innerHTML = ""
    imageUser.src = data.user.avatar
    imageUser.alt = data.user.username
    userName.innerText = data.user.username
    spanSeparate.innerText = "|"
    postDate.innerText = completeDate
    buttonClose.innerText = "X"
    buttonClose.type = "button"
    postTitle.innerText = data.title
    postDescription.innerText = data.content

    body.appendChild(modalBlack)
    modalBlack.appendChild(modalCompletePost)
    modalCompletePost.append(divModalContent, div2)
    divModalContent.append(divInfo, buttonClose)
    divInfo.append(imageUser, userName, spanSeparate, postDate)
    div2.append(postTitle, postDescription)

    modalBlack.addEventListener("click", (event) => {
        if(event.target.classList.contains("modal-background")) {
            modalBlack.classList.remove("flex")
        }
    })

    buttonClose.addEventListener("click", () => {
        modalBlack.classList.remove("flex")
    })
}

function editPost(postID, sendToApi) {

        const body = document.querySelector("body")

        let modalBlack = document.createElement("section")
        let modalCreate = document.createElement("form")
        let divModalContent = document.createElement("div")
        let editingPost = document.createElement("h2")
        let buttonClose = document.createElement("button")
        let divModalContent2 = document.createElement("div")
        let labelPostTitle = document.createElement("label")
        let inputPostTitle = document.createElement("input")
        let labelPostDescription = document.createElement("label")
        let textAreaPostDescription = document.createElement("textarea")
        let divModalContent3 = document.createElement("div")
        let buttonCancel = document.createElement("button")
        let buttonSavePost = document.createElement("button")

        modalBlack.classList.add("modal-background", "flex", "justify-center", "container")
        modalCreate.classList.add("form-create-post", "flex", "flex-column")
        divModalContent.classList.add("flex", "align-i-center", "justify-between")
        editingPost.classList.add("creating-post-title")
        buttonClose.classList.add("button-modal-close")
        divModalContent2.classList.add("div-modal-content-2", "flex", "flex-column")
        labelPostTitle.classList.add("label-post-modal")
        labelPostDescription.classList.add("label-post-modal")
        divModalContent3.classList.add("div-modal-content-3", "flex", "justify-end")
        buttonCancel.classList.add("button-cancel")
        buttonSavePost.classList.add("button-post")

        editingPost.innerText = "Edição"
        buttonClose.innerText = "X"
        buttonClose.type = "button"
        labelPostTitle.innerText = "Título do post"
        labelPostTitle.htmlFor = "input-post-title"
        inputPostTitle.id = "input-post-title"
        inputPostTitle.placeholder = "Digite o título aqui..."
        inputPostTitle.required = true
        inputPostTitle.type = "text"
        labelPostDescription.innerText = "Conteúdo do post"
        labelPostDescription.htmlFor = "input-post-description"
        textAreaPostDescription.id = "input-post-description"
        textAreaPostDescription.placeholder = "Desenvolva o conteúdo do post aqui..."
        textAreaPostDescription.required = true
        buttonCancel.innerText = "Cancelar"
        buttonCancel.type = "button"
        buttonSavePost.innerText = "Salvar alterações"
        buttonSavePost.type = "submit"

        body.appendChild(modalBlack)
        modalBlack.appendChild(modalCreate)
        modalCreate.append(divModalContent, divModalContent2, divModalContent3)
        divModalContent.append(editingPost, buttonClose)
        divModalContent2.append(labelPostTitle, inputPostTitle, labelPostDescription, textAreaPostDescription)
        divModalContent3.append(buttonCancel, buttonSavePost)

        modalCreate.addEventListener("submit", (event) => {
            event.preventDefault()
            const title = inputPostTitle.value
            const content = textAreaPostDescription.value
            sendToApi(postID, {
                title,
                content
            })
            modalBlack.classList.remove("flex")
        })
        modalBlack.addEventListener("click", (event) => {
            if(event.target.classList.contains("modal-background")) {
                modalBlack.classList.remove("flex")
            }
        })
        buttonCancel.addEventListener("click", () => {
            modalBlack.classList.remove("flex")
        })
        buttonClose.addEventListener("click", () => {
            modalBlack.classList.remove("flex")
        })
}

function deletePost(postID, sendToApi) {

    const body = document.querySelector("body")

    let modalBlack = document.createElement("section")
    let modalCreate = document.createElement("form")
    let divModalContent = document.createElement("div")
    let confirmDelete = document.createElement("h2")
    let buttonClose = document.createElement("button")
    let divModalContent2 = document.createElement("div")
    let warnDelete = document.createElement("h2")
    let warnDelete2 = document.createElement("span")
    let divModalContent3 = document.createElement("div")
    let buttonCancel = document.createElement("button")
    let buttonDeletePost = document.createElement("button")

    modalBlack.classList.add("modal-background", "flex", "justify-center", "container")
    modalCreate.classList.add("form-create-post", "flex", "flex-column")
    divModalContent.classList.add("flex", "align-i-center", "justify-between")
    confirmDelete.classList.add("creating-post-title")
    buttonClose.classList.add("button-modal-close")
    divModalContent2.classList.add("div-modal-content-2", "flex", "flex-column")
    warnDelete.classList.add("warn-delete-modal")
    warnDelete2.classList.add("warn-delete-modal-2")
    divModalContent3.classList.add("div-modal-content-3", "flex")
    buttonCancel.classList.add("button-cancel")
    buttonDeletePost.classList.add("button-delete-post-modal")

    confirmDelete.innerText = "Confirmação de exclusão"
    buttonClose.innerText = "X"
    buttonClose.type = "button"
    warnDelete.innerText = "Tem certeza que deseja excluir este post?"
    warnDelete2.innerText = "Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir"
    buttonCancel.innerText = "Cancelar"
    buttonCancel.type = "button"
    buttonDeletePost.innerText = "Sim, excluir este post"
    buttonDeletePost.type = "submit"

    body.appendChild(modalBlack)
    modalBlack.appendChild(modalCreate)
    modalCreate.append(divModalContent, divModalContent2, divModalContent3)
    divModalContent.append(confirmDelete, buttonClose)
    divModalContent2.append(warnDelete, warnDelete2)
    divModalContent3.append(buttonCancel, buttonDeletePost)

    modalCreate.addEventListener("submit", (event) => {
        event.preventDefault()
        sendToApi(postID)
        modalBlack.classList.remove("flex")
    })
    modalBlack.addEventListener("click", (event) => {
        if(event.target.classList.contains("modal-background")) {
            modalBlack.classList.remove("flex")
        }
    })
    buttonCancel.addEventListener("click", () => {
        modalBlack.classList.remove("flex")
    })
    buttonClose.addEventListener("click", () => {
        modalBlack.classList.remove("flex")
    })
    
}

export { creatingPost, readCompletePost, editPost, deletePost }