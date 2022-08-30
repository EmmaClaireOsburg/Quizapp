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

let currentQuestion = 0;

function init(){
    document.getElementById('allQuestions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}