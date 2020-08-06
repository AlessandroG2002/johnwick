var botaoAdicionar = document.querySelector("#terminar-sugestao");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var user = {
        nome: form.inputName.value,
        email: form.inputEmail.value,
        estado: form.inputSug.value
    }

    console.log(user);

    var userTr = montaTr(user);

    var tbody = document.querySelector("#tabela-users");
    tbody.appendChild(userTr);
    form.reset();

});

function montaTr(p) {
    var userTr = document.createElement("tr");
    userTr.classList.add("user");

    userTr.appendChild(montaTd(p.nome));
    userTr.appendChild(montaTd(p.email));
    userTr.appendChild(montaTd(p.estado));

    return userTr;
}

function montaTd(dado) {
    var td = document.createElement("td");
    td.textContent = dado;
    return td;
}