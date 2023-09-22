// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('check').addEventListener('click', function () {
    const guess = parseInt(document.getElementById('guess').value);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('message').textContent = 'Please enter a valid number between 1 and 100.';
    } else if (guess === secretNumber) {
        document.getElementById('message').textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
        document.getElementById('check').disabled = true;
    } else {
        const message = guess < secretNumber ? 'Try a higher number.' : 'Try a lower number.';
        document.getElementById('message').textContent = message;
    }
});
