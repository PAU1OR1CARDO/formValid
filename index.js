const form = document.getElementById('form')
const nameInput = document.getElementById("name")
const lastnameInput = document.getElementById('lastname')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    if(nameInput.value === ''){
        alert('O nome não pode ser vazio!')
    } else if(nameInput.value.length < 3){
        alert('O nome precisa ter no minimo 3 caracteres')
    }else{
        true
    }

    if(lastnameInput.value === ''){
        alert('O sobrenome não pode ser vazio!')
    }

    if(emailInput.value === '' || !validarEmail(emailInput.value)){
        alert('Digite um e-mail válido')
    }

    if(passwordInput.value === '' || !validarPassword(passwordInput.value)){
        alert('Digite uma senha válida')
    }

    else{
        alert('Tudo certo')
    }
    

    form.submit()
})

function validarEmail(email){

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    if(regexEmail.test(email)){
        return true
    } 
    return false
    
}

function validarPassword(password){

     let regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

     if(regexSenha.test(password)){
        return true
     }
     else false
}
