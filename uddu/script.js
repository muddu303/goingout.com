function startQuestion() {
    document.getElementById("startButton").style.display = "none"; // Hide start button
    document.getElementById("question").classList.remove("hidden"); // Show first question
}

function answerYes() {
    document.getElementById("question").style.display = "none"; // Hide question
    setTimeout(() => {
        document.getElementById("result").classList.remove("hidden");
        document.getElementById("finalText").innerHTML = "That's awesome! I have a surprise for you...<br>Will you go out with me, Naina? 💖";
    }, 1000);
}

function answerNo() {
    document.getElementById("question").style.display = "none"; // Hide question
    setTimeout(() => {
        document.getElementById("result").classList.remove("hidden");
        document.getElementById("finalText").innerHTML = "I guess you don't like surprises...<br>But I still want to ask, will you go out with me, Naina? 💖";
    }, 1000);
}
