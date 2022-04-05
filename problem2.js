let quiz = document.getElementById('quiz');
let results = document.getElementById('results');
let submitButton = document.getElementById('submit');


function createQuiz() {
  let output = [];

  questions.forEach(
    (currentQuestion, questionNumber) => {
      let answers = [];

      for(letter in currentQuestion.answers) {
        answers.push(
          `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
         <div class="answers"> ${answers.join('')}`
      );
    }
  );

  quiz.innerHTML = output.join('');
}

function viewResults() {
  let answerContainers = quiz.querySelectorAll('.answers');

  let numCorrect = 0;

  questions.forEach( (currentQuestion, questionNumber) => {

    let answerContainer = answerContainers[questionNumber];
    let selector = `input[name=question${questionNumber}]:checked`;
    let userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer) {

      numCorrect++;

      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    else {
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  results.innerHTML = `${numCorrect} out of ${questions.length}`;
}

createQuiz();
submitButton.addEventListener('click', viewResults)

let questions = [
  {
    question: "What is the HSU mascot?",
    answers: {
      a: "ThiccFoot",
      b: "Kraken",
      c: "Lumberjack"
    },
    correctAnswer: "c"
  },
  {
    question: "What is Dr. Racket?",
    answers: {
      a: "Dr. Racket is like a soda or something",
      b: "A programming language",
      c: "An evil Dr who is too smart for his own good"
    },
    correctAnswer: "b"
  },
  {
    question: "How do I initialize am int variable in C++?",
    answers: {
      a: "int x = 5;",
      b: "x = 5;",
      c: "let x = 5;"
    },
    correctAnswer: "a"
  },
  {
    question: "Java and JavaScript are virtually the same",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b"
  },
  {
    question: "Python is widely used for data analysis",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a"
  }
];

window.addEventListener("load", createQuiz, false);
