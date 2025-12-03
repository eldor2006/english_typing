let uzWords = [];
let enWords = [];
let currentIndex = -1;


const inputSection = document.getElementById("inputSection");
const testSection = document.getElementById("testSection");
const error = document.getElementById("error");


const currentWord = document.getElementById("currentWord");
const answerInput = document.getElementById("answer");
const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");


// Boshlash tugmasi


document.getElementById("startBtn").addEventListener("click", () => {
uzWords = document.getElementById("uzWords").value.trim().split("\n");
enWords = document.getElementById("enWords").value.trim().split("\n");


if (uzWords.length !== 20 || enWords.length !== 20) {
error.textContent = "❗ 20 ta so'z va 20 ta tarjima bo'lishi shart!";
return;
}


inputSection.classList.add("hidden");
testSection.classList.remove("hidden");


nextWord();
});


// Random so'z chiqarish
function nextWord() {
currentIndex = Math.floor(Math.random() * uzWords.length);
currentWord.textContent = uzWords[currentIndex];
answerInput.value = "";
result.textContent = "";
nextBtn.classList.add("hidden");
}


// Tekshirish tugmasi


document.getElementById("checkBtn").addEventListener("click", () => {
const userAnswer = answerInput.value.trim().toLowerCase();
const correctAnswer = enWords[currentIndex].trim().toLowerCase();


if (!userAnswer) return;


if (userAnswer === correctAnswer) {
result.style.color = "green";
result.textContent = "✅ To'g'ri!";
} else {
result.style.color = "red";
result.textContent = `❌ Xato! To'g'risi: ${correctAnswer}`;
}


nextBtn.classList.remove("hidden");
});


// Keyingi so'z tugmasi
nextBtn.addEventListener("click", nextWord);