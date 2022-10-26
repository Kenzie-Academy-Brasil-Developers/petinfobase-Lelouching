import { getPosts, createPost } from "../../scripts/api.js"
import { renderUserInfo, renderPosts } from "../../scripts/render.js";
import { creatingPost, editPost, deletePost } from "../../scripts/modal.js"

function userIsLogged() {
    const token = localStorage.getItem("account-token")
    const tokenParse = JSON.parse(token)

    if(!tokenParse) {
        window.location.assign("../../index.html")
    }
}

userIsLogged()

renderUserInfo()

getPosts(renderPosts)

creatingPost(createPost)

function leaveAccount() {
    const buttonLeave = document.querySelector(".button-leave-account")

    buttonLeave.addEventListener("click", () => {
        localStorage.removeItem("user-data")
        localStorage.removeItem("account-token")
        window.location.assign("../../index.html")
    })
}

leaveAccount()