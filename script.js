document.addEventListener('DOMContentLoaded', function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');

    guessButton.addEventListener('click', function() {
        const guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = 'Por favor, insira um número válido entre 1 e 100.';
        } else {
            attempts++;
            attemptsDisplay.textContent = `Tentativas: ${attempts}`;

            if (guess === randomNumber) {
                message.textContent = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativas!`;
                message.style.color = 'green';
                guessInput.disabled = true;
                guessButton.disabled = true;
            } else if (guess < randomNumber) {
                message.textContent = 'O número é maior.';
                message.style.color = 'red';
            } else {
                message.textContent = 'O número é menor.';
                message.style.color = 'red';
            }
        }

        guessInput.value = '';
        guessInput.focus();
    });
});
