let questions = [
    {
        "question": "Wie heißt der allererste Avatar?",
        "answer_1": "Korra",
        "answer_2": "Aang",
        "answer_3": "Zuko",
        "answer_4": "Wan",
        "right_answer": 4
    },

    {
        "question": "wie heißt die (Ex)Freundin von Prinz Zuko?",
        "answer_1": "Mai",
        "answer_2": "Katara",
        "answer_3": "Azula",
        "answer_4": "Suki",
        "right_answer": 1
    },

    {
        "question": "Wie viele Kinder hat Tenzin?",
        "answer_1": "Sechs",
        "answer_2": "Zwei",
        "answer_3": "Fünf",
        "answer_4": "vier",
        "right_answer": 4
    },

    {
        "question": "Wie lautet der Befehl, ein Himmelsbison zum fliegen zu bringen?",
        "answer_1": "Abrakadabra",
        "answer_2": "Yip-Yip",
        "answer_3": "Yeehaw",
        "answer_4": "Alle-Alle",
        "right_answer": 2
    },

    {
        "question": "Welches Tier ist der treue Freund von Bulin?",
        "answer_1": "ein Feuerlemur",
        "answer_2": "eine Wolfsfledermaus",
        "answer_3": "ein Feuerfrettchen",
        "answer_4": "ein Feuermarder",
        "right_answer": 3
    },

    {
        "question": "Wobei half Zuko Katara?",
        "answer_1": "den Wasserstamm wieder aufzubauen",
        "answer_2": "Sokka aus dem Gefängnis zu befreien",
        "answer_3": "den Mörder ihrer Mutter zu finden",
        "answer_4": "sich an der Feuernation zu rächen",
        "right_answer": 3
    },

];

let rightQuestions = 0;

let currentQuestion = 0;

function init(){
    document.getElementById('allQuestions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if(currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';

        document.getElementById('allAnswers').innerHTML = questions.length;
        document.getElementById('rightAnswers').innerHTML = rightQuestions;

        document.getElementById('headerImage').src = 'img/trophy.jpg';


    } else {

        let question = questions[currentQuestion];
        
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];

        document.getElementById('actualQuestion').innerHTML = currentQuestion + 1;
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success'); 
        rightQuestions++;
    } else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); 
    }
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextButton').disabled = true;
    resetButtons();
    showQuestion();
    
}

function resetButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}