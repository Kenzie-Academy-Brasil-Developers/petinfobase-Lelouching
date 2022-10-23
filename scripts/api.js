/* Desenvolva seu código aqui */

import { accountCreated, postDeleted, userNotFound } from "./toast.js"
import { renderPosts } from "./render.js"

async function creatingAccount(data) {

    const buttonRegister = document.querySelector(".button-register")

    buttonRegister.innerHTML = `<img class="image-loading" src="../../assets/img/loading.gif" alt="Carregando">`

    try{
        const createUser = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        //O responseJSON por algum motivo está recarregando a página

        const responseJSON = await fetch("http://localhost:3333/users/create", createUser)

        if(responseJSON.ok) {
            accountCreated()
            buttonRegister.innerHTML = `Cadastrar`
        }
    
    } catch (err) {
        console.log(err)
    }
}

async function loggingAccount(data) {

    const buttonLogin = document.querySelector(".button-login")
    const wrongPassword = document.querySelector(".wrong-password")
    const userPasswordInput = document.querySelector("#user-password-login") || document.querySelector("#input-login-error")

    userPasswordInput.id = "user-password-login"
    buttonLogin.innerHTML = `<img class="image-loading" src="../../assets/img/loading.gif" alt="Carregando">`

    try{
        const loginUser = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const responseJSON = await fetch("http://localhost:3333/login", loginUser)
        const response = await responseJSON.json()

        if(response.message == "A senha está incorreta") {
            buttonLogin.innerHTML = `Acessar`
            userPasswordInput.id = "input-login-error"
            return wrongPassword.classList.add("flex")
        } else if (response.message == "O email está incorreto") {
            buttonLogin.innerHTML = `Acessar`
            return userNotFound()
        } else {
            wrongPassword.classList.remove("flex")
            userPasswordInput.id = "user-password-login"
        }
        console.log(response)
        const saveUserToken = localStorage.setItem("account-token", JSON.stringify(response))

        const loginUserData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${response.token}`
            }
        }

        const responseJSON2 = await fetch("http://localhost:3333/users/profile", loginUserData)
        const response2 = await responseJSON2.json()

        const userData = JSON.stringify(response2)
        localStorage.setItem("user-data", userData)
        window.location.assign("./pages/home/index.html")
    } catch (err) {
        console.log(err)
    }

}

async function getPosts(renderFunction) {

    try{
        const accountToken = localStorage.getItem("account-token")
        const accountTokenParse = JSON.parse(accountToken)

        const getPosts = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${accountTokenParse.token}`
            }
    }

    const responseJSON = await fetch("http://localhost:3333/posts", getPosts)
    const response = await responseJSON.json()

    renderFunction(response)

    } catch (err) {
        console.log(err)
    }
}

async function createPost(data) {

    try{

        const accountToken = localStorage.getItem("account-token")
        const accountTokenParse = JSON.parse(accountToken)

        const createPost = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accountTokenParse.token}`
            },
            body: JSON.stringify(data)
        }

        const responseJSON = await fetch("http://localhost:3333/posts/create", createPost)

        getPosts(renderPosts)
    } catch (err) {
        console.log(err)
    }
}

async function editingPost(postID, data) {
    try{

        const accountToken = localStorage.getItem("account-token")
        const accountTokenParse = JSON.parse(accountToken)

        const editPost = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accountTokenParse.token}`
            },
            body: JSON.stringify(data)
        }

        const responseJSON = await fetch(`http://localhost:3333/posts/${postID}`, editPost)

        getPosts(renderPosts)
    } catch (err) {
        console.log(err)
    }
}

async function deletingPost(postID) {
    try{

        const accountToken = localStorage.getItem("account-token")
        const accountTokenParse = JSON.parse(accountToken)

        const deletePost = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accountTokenParse.token}`
            }
        }

        const responseJSON = await fetch(`http://localhost:3333/posts/${postID}`, deletePost)

        getPosts(renderPosts)

        if(responseJSON.ok) {
            postDeleted()
        }
    } catch (err) {
        console.log(err)
    }
}

export { creatingAccount, loggingAccount, getPosts, createPost, editingPost, deletingPost }