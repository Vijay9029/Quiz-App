const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        A: "Hello to my land",
        B: "Hey text markup Language",
        C: "Hyper Text Makeup Language ",
        D: "Hyper Text Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        A: "Cascading sheet style",
        B: "Cascade style sheet",
        C: "class style sheet",
        D: "Clear style sheet",
        ans: "ans2"
    },
    {
        question: "Q3: What is the full form of JS?",
        A: "Java Script",
        B: "Java Style",
        C: "Jira sheet",
        D: "Java Shorten",
        ans: "ans1"
    },
    {
        question: "Q4: What is the backend for Javascript?",
        A: "Node.js",
        B: "Django",
        C: "Laravel ",
        D: "Ruby",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');


let questionCount = 0;
let score = 0;
const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.A;
    option2.innerHTML = questionList.B;
    option3.innerHTML = questionList.C;
    option4.innerHTML = questionList.D;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => {
        curAnsElem.checked = false;
    });
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {

        showScore.innerHTML = ` 
            <h3> You scored ${score}/${quizDB.length} </h3>
            <button class ="btn" onclick="location.reload()"> Play Again</button>
        `;

        showScore.classList.remove('scoreArea');

    }

});