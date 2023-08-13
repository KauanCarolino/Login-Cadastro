if (localStorage.getItem("token") == null){
    alert("Faça login para acessar essa página!");
    window.location.href="./assets/HTML/signin.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado");
logado.innerHTML = `Ola ${userLogado.nome}`;

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href="./assets/HTML/signin.html";
}
