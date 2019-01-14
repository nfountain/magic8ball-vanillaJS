// Global Variables

var question;
var button = document.getElementById('question-btn');
var answer = document.getElementById('answer');

// magicEightBall Object, properties, and methods

var magicEightBall = {};
magicEightBall.answerList = ["It is certain.", "As I see it, yes.", "Reply hazy, try again.", "Don't count on it.", "It is decidedly so.", "Most likely.", "Ask again later.", "My reply is no.", "Without a doubt.", "Outlook good.", "Better not tell you now.", "My sources say no.", "Yes - definitely.", "Yes.", "Cannot predict now.", "Outlook not so good.", "You may rely on it.", "Signs point to yes.", "Concentrate and ask again.", "Very doubtful."];
magicEightBall.provideAnswer = function(question) {
	var randomNumber = Math.random();
	var randomNumArray = randomNumber * this.answerList.length;
	var randomIndex = Math.floor(randomNumArray);
	var randomAnswer = this.answerList[randomIndex];
	console.log(question);
	console.log(randomAnswer);
	answer.innerText = randomAnswer;
};

var askQuestion = function () {
	question = prompt('Ask me your question');
	magicEightBall.provideAnswer(question);
};

//magicEightBall.questionAnswer("Will I ever learn JS?");

// Event Listener
button.addEventListener('click', askQuestion);
