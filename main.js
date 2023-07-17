const form = document.getElementById('form-idades');
const numeroA = document.getElementById('sua-idade');
const numeroB = document.getElementById('idade-mae');
let formEValido = false;


form.addEventListener('submit', function (e){
    e.preventDefault();

    const mensagemSucesso = `Parabéns sua idade de <b>${numeroA.value}</b> anos, é menor que a idade de sua mãe, <b>${numeroB.value}</b> anos!`;
    const mensagemFracasso = `Infelizmente as idades estão erradas pois sua idade, <b>${numeroA.value}</b> anos, está maior que a idade de sua mãe, <b>${numeroB.value}</b> anos.`;

    formEValido
    if ((numeroB.value) > (numeroA.value)) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';

        const containerMensagemFracasso = document.querySelector('.failure-message');
        containerMensagemFracasso.innerHTML = mensagemFracasso;
        containerMensagemFracasso.style.display = 'none';



    } else {
        const containerMensagemFracasso = document.querySelector('.failure-message');
        containerMensagemFracasso.innerHTML = mensagemFracasso;
        containerMensagemFracasso.style.display = 'block';

        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'none';
    }

})







