let score = 0;
const lockedQuestions = [];

// Kunci jawaban untuk mendatar dan menurun
const answers = {
    d1: "EXO",
    d2: "BLACKPINK",
    d3: "YOONA",
    d4: "TXT",
    d5: "ASTRO",
    m1: "ENHYPEN",
    m2: "BOA",
    m3: "AESPA",
    m4: "VIP",
    m5: "NCT"
};

// Fungsi untuk memeriksa jawaban dan memperbarui skor
function checkAnswer(questionId) {
    const correctAnswer = answers[questionId];
    const inputs = Array.from(document.querySelectorAll(`input[data-question*="${questionId}"]`));

    // Gabungkan semua nilai input untuk membentuk jawaban pengguna
    const userAnswer = inputs.map(input => input.value.toUpperCase()).join('');

    if (userAnswer === correctAnswer) {
        if (!lockedQuestions.includes(questionId)) { 
            score += 1;
            document.getElementById("score").innerText = score;
            alert("Correct!");
            lockAnswer(questionId); 
            lockedQuestions.push(questionId); 
        }
    } else {
        alert("Incorrect, try again!");
    }
}

// Fungsi untuk mengunci jawaban ketika sudah benar
function lockAnswer(questionId) {
    const inputs = document.querySelectorAll(`input[data-question*="${questionId}"]`);
    inputs.forEach(input => input.disabled = true);
}

// Event listener untuk tombol
document.querySelectorAll("button[data-question-id]").forEach(button => {
    button.addEventListener("click", function() {
        const questionId = this.getAttribute("data-question-id");
        checkAnswer(questionId);
    });
});
