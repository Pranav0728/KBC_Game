const quizDB = [
  {
    question: "Questions will be displayed shortly.",
    a: "Option1",
    b: "Option2",
    c: "Option3",
    d: "Option4",
    ans: "Option1",
  },
  {
    question: "Who was the first President of India?",
    a: "Dr. Rajendra Prasad",
    b: "Jawaharlal Nehru",
    c: "Sardar Patel",
    d: "B.R. Ambedkar",
    ans: "Dr. Rajendra Prasad",
  },
  {
    question:"During which year did the Indian National Congress adopt the resolution for complete independence?",
    a: "1929",
    b: "1935",
    c: "1942",
    d: "1947",
    ans: "1929",
  },
  {
    question: "Which battle is known as the 'Turning point of Indian history'?",
    a: "Battle of Buxar",
    b: "Battle of Plassey",
    c: "Battle of Panipat",
    d: "Battle of Haldighati",
    ans: "Battle of Plassey",
  },
  {
    question: "Who is considered the 'Father of the Indian Constitution'?",
    a: "Sardar Patel",
    b: "B.R. Ambedkar",
    c: "Mahatma Gandhi",
    d: "Jawaharlal Nehru",
    ans: "B.R. Ambedkar",
  },
  {
    question:"Who led the Dandi March (Salt March) in 1930 as a symbol of protest against British salt taxes?",
    a: "Subhas Chandra Bose",
    b: "Bhagat Singh",
    c: "Mahatma Gandhi",
    d: "Sardar Patel",
    ans: "Mahatma Gandhi",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

let questioncount = 0;

const loadquestion = () => {
  let questions = quizDB[questioncount].question;
  let options = quizDB[questioncount];

  question.innerHTML = questions;

  option1.innerHTML = options.a;
  option2.innerHTML = options.b;
  option3.innerHTML = options.c;
  option4.innerHTML = options.d;
};

loadquestion();

/* Countdown */
let countdown;
let timeLeft = 29;
const tickSound = document.getElementById("tickSound");
const correctsound = document.getElementById("correctsound");
const playsound = document.getElementById("playsound");
const waitsound = document.getElementById("waitsound");
const wrongsound = document.getElementById("wrongsound");

waitsound.play();

const change = () => {
  questioncount++;
  waitsound.pause();
  loadquestion();
  playsound.play();
  setTimeout(() => {
    options.forEach((option) => {
      option.style.pointerEvents = "auto";
      option.classList.remove("correct", "wrong");
    });
    resettimer();
  },0.1);
  setTimeout(() => {
    startCountdown();
  }, 2000);
};


function startCountdown() {
  countdown = setInterval(updateTimer, 1000);
  tickSound.currentTime = 0;
  tickSound.play();
  document.getElementById("startButton");
  document.getElementById("stopButton");
}

function stopCountdown() {
  clearInterval(countdown);
  document.getElementById("startButton");
  document.getElementById("stopButton");
  tickSound.pause();
}
function resettimer() {
  options.forEach((option) => {
    option.style.pointerEvents = "auto";
    option.classList.remove("correct", "wrong");
  });
  clearInterval(countdown);
  timeLeft = 30;
  tickSound.pause();
  tickSound.currentTime = 0;
  updateTimer();
}

function updateTimer() {
  const timerElement = document.querySelector(".timer");
  if (timeLeft > 0) {
    timerElement.textContent = `${timeLeft}`;
    timeLeft--;
  } else {
    clearInterval(countdown);
    timerElement.textContent = "Time's up!";
    document.getElementById("startButton");
    document.getElementById("stopButton");
    timeLeft = 29;
    tickSound.pause();
  }
}
// Select all option elements
const options = document.querySelectorAll(".option");

// Add a click event listener to each option
options.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedAnswer = option.innerHTML;
    const correctAnswer = quizDB[questioncount].ans;

    if (selectedAnswer === correctAnswer) {
      option.classList.add("correct");
      setTimeout(() => {
        correctsound.currentTime = 0;
        correctsound.play();
        stopCountdown();
      }, 1000);
    } else {
      option.classList.add("wrong");
      // You can also highlight the correct answer here
      setTimeout(() => {
        tickSound.currentTime = 0; // Reset the audio to the beginning
        wrongsound.play();
        stopCountdown();
      }, 1000);
      document.getElementById(correctAnswer).classList.add("correct");
    }

    // // Disable further clicking on options until the next question is loaded
    options.forEach((option) => {
      option.style.pointerEvents = "none";
    });

    // Add a slight delay before moving to the next question // You can adjust the delay time as needed
  });
});
