let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');

let nomeOk = false;
let emailOK = false;
let assuntoOk = false;
let mapa = document.querySelector('#mapa');
mapa.style.width = '100%';

function validaNome() {
    let txtNome = document.querySelector('#txtNome');
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido!';
        txtNome.style.color = 'red';
    } else {
        txtNome.innerHTML = " Nome valido";
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail');
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.')==-1) {
        txtEmail.innerHTML = 'Email invalido'
        txtEmail.style.color = 'red'
    } else
        txtEmail.innerHTML = 'Email valido'
    txtEmail.style.color = 'green'
    emailOK = true

}