const activities = window.activities;
const generateButton = document.getElementById("generate");
const resultBox = document.getElementById("result");

function pickActivity() {
    return activities[Math.floor(Math.random() * activities.length)];
}

generateButton.addEventListener("click", () => {
    resultBox.innerText = pickActivity()
});