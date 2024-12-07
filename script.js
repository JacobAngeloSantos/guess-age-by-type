// script.js

let typingTimes = [];
let lastKeyPressTime = null;

const typingArea = document.getElementById("typingArea");
const result = document.getElementById("result");

// Track typing speed
typingArea.addEventListener("keydown", (event) => {
    const currentTime = new Date().getTime();

    if (lastKeyPressTime) {
        const timeDiff = currentTime - lastKeyPressTime;
        typingTimes.push(timeDiff);
    }

    lastKeyPressTime = currentTime;
});

// Guess age based on typing patterns
function guessAge() {
    if (typingTimes.length < 5) {
        result.innerText = "Please type a bit more for me to guess!";
        return;
    }

    // Calculate average typing speed
    const averageTime = typingTimes.reduce((a, b) => a + b, 0) / typingTimes.length;

    let guessedAge;

    // Simple logic: Younger people type faster
    if (averageTime < 100) {
        guessedAge = "15-25 (Fast typer!)";
    } else if (averageTime < 200) {
        guessedAge = "25-35 (Moderate speed)";
    } else if (averageTime < 400) {
        guessedAge = "35-50 (Careful typer)";
    } else {
        guessedAge = "50+ (Taking it easy)";
    }

    result.innerText = `I guess your age is: ${guessedAge}`;
    typingTimes = []; // Reset for new guess
}
