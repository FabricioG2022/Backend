const socket = io();
socket.emit('message', 'Hola')
const elementExists = (id) => document.getElementById(id) !== null;

elementExists("submit") && document.getElementById("submit").addEventListener("click", (e) => {
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
        .then(data => {
            if (data === "success") {
                window.location.href = "/profile";
            } else {
                alert("Algo ha pasado");
            }
        })
        .catch((error) => console.log(error))

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
        }).then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
    })
})

const fetchContenido = async () => {
    const response = await fetch("http://localhost:8080/api/product");
    const data = await response.json();
    const myElement = document.getElementById("contenido");
    myElement.innerHTML = data.payload.map((product) => {
        return `<div>
        <img src="${product.thumbnail} alt="...">
        <div>
        <h5>${product.title}</h5>
        <p>${product.description}</p>
        <p>${product.price}</p>
        <a href="#">Go</a>
        </div>
        </div>`
    })
}