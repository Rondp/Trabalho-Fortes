function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "Administrador" && senha == "adm123"){
        alert('Sucesso');
        location.href = "../HTML/homeadm.html";
    }
    else if
    (login == "Donatario01" && senha == "dona123"){
        alert('Sucesso');
        location.href = "../HTML/paginahome.html";
    }
    else{
        alert('Usuario ou senha incorretos');
    }

}