// Global Variables

var question;
var button = document.getElementById('question-btn');
var answer = document.getElementById('answer');
var image = document.getElementById('magicball');
var imgElement = document.querySelector('img');
var imgSrc = ('https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png');
image.src = imgSrc;

// hide answer text at beginning
answer.style.visibility = 'hidden';

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

// Game functions

var chkClass = function(element, className) {
	if (element.classList.contains(className)) {
		hasClass = true;
	}
	else {
		hasClass = false;
	}
	console.log(element.classList);
};

chkClass(imgElement, 'shaking');

var addClass = function(element, className) {
	if (hasClass === false) {
		element.classList.add(className);
		console.log(element.classList);
	}
};

//addClass(imgElement, 'shaking');

var rmvClass = function(element, className) {
	if (hasClass === true) {
		element.classList.remove(className);
		console.log(element.classList);
	}
};

//rmvClass(imgElement, 'shaking');

var askQuestion = function () {
	// reset to original load:
	answer.style.visibility = 'hidden';
	image.src = ('https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png');
	// button.on.click prompt with "Ask me your question", and after prompt shake ball, flip, reveal answer.
	question = prompt('Ask me your question');
	magicEightBall.provideAnswer(question);
	console.log("this is when shaking will happen if I put it in the code here");
	addClass(imgElement, 'shaking');
	setTimeout(function() {
		rmvClass(imgElement, 'shaking');
	}, 1500);
	setTimeout( function () {
		image.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png";
		//show answer
		answer.style.visibility = 'visible';
		//fadein answer
		//answer.fadeIn(3000);
	}, 1550);
};

// Event Listener
button.addEventListener('click', askQuestion);
