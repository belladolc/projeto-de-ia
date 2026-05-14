// Selecionando os elementos
const valorDisplay = document.querySelector('#valor');
const botoes = document.querySelectorAll('button');

let contador = 0;

// Adicionando funcionalidade a cada botão
botoes.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const classe = e.currentTarget.id;

        if (classe === 'diminuir') {
            contador--;
        } else if (classe === 'aumentar') {
            contador++;
        } else {
            contador = 0;
        }

        // Mudando a cor baseada no valor
        if (contador > 0) valorDisplay.style.color = "green";
        if (contador < 0) valorDisplay.style.color = "red";
        if (contador === 0) valorDisplay.style.color = "#333";

        valorDisplay.textContent = contador;
    });
});
