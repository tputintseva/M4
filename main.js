let start = document.getElementById("start");
let result = document.getElementById("result");
let main = document.getElementById("main");

let current = 0;
let count  = 0;
let questions = [
    {
        question: "2 + 2",
        correct: 4,
        answers: [4, 5, 6, 10, 12]
    },
    {
        question: "4 + 4",
        correct: 8,
        answers: [1, 4, 6, 8, 10]
    },
    {
        question: "В каком году был создан СССР?",
        correct: 1922,
        answers: [1920, 1922, 1924, 1926]
    },
    {
        question: "Кто написал 'Войну и мир'?",
        correct: "Л.Н.Толстой",
        answers: ["Л.Н.Толстой", "Ф.М.Достоевский", "Н.А.Некрасов", "Н.В.Гоголь"]
    },
    {
        question: "Кто президент РФ?",
        correct: "В.В.Путин",
        answers: ["Б.Н.Ельцин", "Д.А.Медведев", "С.В.Лавров", "В.В.Путин"]
    },
];

function startProgram () {
    start.classList.add("close");
    main.classList.remove("close");
    result.classList.add("close");
    generate()
}

start.addEventListener("click", startProgram);

function generate() {
    let question = questions[current].question; 
    main.innerHTML = `<h2 class="title">${question}</h2>`;

    let answers = questions[current].answers;
    let block = "";
    for (let i of answers) {
        block += `<button class="btn" onclick="check('${i}')">${i}</button>`;
    }

    main.innerHTML += `<nav>${block}</nav>`;
}

function check(answer) {
    correct = questions[current].correct;
    if (correct == answer) {
        count += 1;
    }
    current += 1;
    if (questions.length > current) {
        generate()
    } else {
        stop()
    }
}

function stop() {
    start.classList.remove("close");
    main.classList.add("close");
    result.classList.remove("close");

    result.innerHTML = `Решено ${count} из ${questions.length}`
    current = 0;
    count = 0;
}