// What do I need to do?
// function to start quiz/capture button

// function to get questions

var questions = [
    {
        title: "question 1",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test1"
    },
    {
        title: "question 2",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test2"
    },
    {
        title: "question 3",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test3"
    },
    {
        title: "question 4",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test4"
    },
    {
        title: "question 5",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test3"
    },
    {
        title: "question 6",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test1"
    },
    {
        title: "question 7",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test4"
    },
    {
        title: "question 8",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test2"
    },
    {
        title: "question 9",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test2"
    },
    {
        title: "question 10",
        choices: ["test1", "test2", "test3", "test4"],
        answer: "test3"
    },
]

// create a function to keep track of the score
let correctAnswers = 0;
let wrongAnswers = 0;

// Iterate over the questions array and display each question in a confirmation box
for(let i = 0; i < questions.length; i++) {
    const answer = confirm(questions[i].title);
// function to check whether answer is right or wrong. Increment the score accordingly
if (answer === questions[i].answer) {
    correctAnswers++;
    alert('You are correct');
} else {
    timer -= 10;
    alert('You are incorrect');
}

}
// function for timer
var timer = 180
var index = 0
function test(){
    var example = document.getElementById("example")
    example.testContent = questions.index.title
}

function timer () {
    timer --
    if (timer<=0){
         quizOver()
    }
}
// function for quizOver
function quizOver(){
clearInterval(timer);
finalScore = 
}

// function for High Score/local
