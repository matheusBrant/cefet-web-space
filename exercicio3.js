// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML


const botaoExpandirRetrair = document.querySelectorAll('.botao-expandir-retrair');
botaoExpandirRetrair.forEach(function(itemEl) {
    itemEl.addEventListener('click', function (e) {
        let clicou = e.currentTarget.parentNode.classList.toggle('expandido');
        e.currentTarget.innerHTML = clicou ? "-" : "+"; //operador ternario facilitando o if else
    });
});