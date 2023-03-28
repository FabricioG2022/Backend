const socket = io();
const fetch = require("node-fetch");
socket.emit('message', 'Hola')
const elementExists = (id) => document.getElementById(id) !== null;

elementExists("login") && document.getElementById("login").addEventListener("click", (e) => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            username,
            password
        }),
    })
        .then(res => res.json())
        .then(data => console.log(data))



});

elementExists("signup") && document.getElementById("signup").addEventListener("click", (e) => {
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;

    fetch("/signup", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            password,
            age
        })
            .then((res) => res.json())
            .then(data => {

                if (!first_name && !last_name && !email && !password && !age) {
                    return alert("Complete los campos por favor")
                } else {
                    window.location.replace("http://localhost:8080/login")
                }
            })
            .catch((error) => console.log(error))
    })
})



const products = () => {
    const getProduct = async (limit = 2, page = 1) => {
        const product = await fetch(`/api/products/?limit=${limit}&page=${page}`)
        const result = await product.json()
        return result
    }
}

const identification = document.getElementById("identification")

identification.addEventListener("click", () => {
    window.location.replace("http://localhost:8080/login")
})