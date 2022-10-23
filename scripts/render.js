import { readCompletePost, editPost, deletePost } from "./modal.js"
import { editingPost, deletingPost } from "./api.js"

function renderUserInfo() {

    const userData = localStorage.getItem("user-data")
    const userDataParse = JSON.parse(userData)

    const userImage = document.querySelector(".user-image-logged")
    const usernameModal = document.querySelector(".username-modal")

    userImage.src = userDataParse.avatar
    userImage.alt = userDataParse.username
    usernameModal.innerText = `@${userDataParse.username}`

    userImage.addEventListener("click", () => {
        const modalLeaveAccount = document.querySelector(".leave-account")
        modalLeaveAccount.classList.toggle("flex")
    })
}

function renderPosts(data) {
    const ul = document.querySelector(".list-posts")
    const userData = localStorage.getItem("user-data")
    const userDataParse = JSON.parse(userData) 

    ul.innerHTML = ""

    data.forEach(element => {
        let li = document.createElement("li")
        let article = document.createElement("article")
        let div1 = document.createElement("div")
        let divInfo = document.createElement("div")
        let imageUser = document.createElement("img")
        let userName = document.createElement("span")
        let spanSeparate = document.createElement("span")
        let postDate = document.createElement("span")
        let divButtons = document.createElement("div")
        let buttonEdit = document.createElement("button")
        let buttonDelete = document.createElement("button")
        let div2 = document.createElement("div")
        let postTitle = document.createElement("h2")
        let postDescription = document.createElement("p")
        let accessPost = document.createElement("span")

        article.classList.add("article-post", "flex", "flex-column")
        div1.classList.add("flex", "align-i-center", "justify-between")
        divInfo.classList.add("div-info-post", "flex", "align-i-center")
        imageUser.classList.add("user-image-post")
        userName.classList.add("user-post-name")
        spanSeparate.classList.add("span-separate")
        postDate.classList.add("post-date")
        divButtons.classList.add("div-button-post", "flex", "align-i-center")
        buttonEdit.classList.add("button-edit-post")
        buttonDelete.classList.add("button-delete-post")
        div2.classList.add("div-content-post", "flex", "flex-column")
        postTitle.classList.add("user-post-title")
        postDescription.classList.add("user-post-description")
        accessPost.classList.add("access-user-post")

        imageUser.src = element.user.avatar
        imageUser.alt = element.user.username
        userName.innerText = element.user.username
        spanSeparate.innerText = "|"
        const postYearDate = element.createdAt.at(0) + element.createdAt.at(1) + element.createdAt.at(2) + element.createdAt.at(3)
        const postMonthDate = element.createdAt.at(5) + element.createdAt.at(6)
        const monthes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        const monthFound = monthes.filter((data) => monthes.indexOf(data) == postMonthDate - 1)
        const completeDate = `${monthFound} de ${postYearDate}`
        postDate.innerText = completeDate
        buttonEdit.innerText = "Editar"
        buttonEdit.type = "button"
        buttonDelete.innerText = "Excluir"
        buttonDelete.type = "button"
        postTitle.innerText = element.title
        const contentArray = Array.from(element.content)
        let contentLimited = ""
        contentArray.forEach(element3 => {
            if(contentLimited.length <= 145) {
                contentLimited += element3
            } else if(contentLimited.length == 146) {
                contentLimited += "..."
            }
        })
        postDescription.innerText = contentLimited
        accessPost.innerText = "Acessar post"
        accessPost.id = element.id

        ul.appendChild(li)
        li.appendChild(article)
        article.append(div1, div2)
        div1.append(divInfo, divButtons)
        divInfo.append(imageUser, userName, spanSeparate, postDate)
        if(element.user.username == userDataParse.username) {
            divButtons.append(buttonEdit, buttonDelete)
        }
        div2.append(postTitle, postDescription, accessPost)

        accessPost.addEventListener("click", (event) => {
            if(event.target.id == accessPost.id) {
                readCompletePost(element, completeDate)
            }
        })
        buttonEdit.addEventListener("click", () => {
            editPost(element.id, editingPost)
        })
        buttonDelete.addEventListener("click", () => {
            deletePost(element.id, deletingPost)
        })
    });
}

export { renderUserInfo, renderPosts }