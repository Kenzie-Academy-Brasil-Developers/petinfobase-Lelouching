import { getPosts, createPost } from "../../scripts/api.js"
import { renderUserInfo, renderPosts } from "../../scripts/render.js";
import { creatingPost, editPost, deletePost } from "../../scripts/modal.js"

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