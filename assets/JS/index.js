if (localStorage.getItem("token") == null){
    alert("Faça login para acessar essa página!");
    document.location.href="../assets/html/sigin.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector(".Logado");
logado.innerHTML = 'Olá ${userLogado.nome}';

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    document.location.href="../html/sigin.html";
}

//testando nova branch de projeto compartilhado