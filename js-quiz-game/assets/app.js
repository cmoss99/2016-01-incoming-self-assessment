$(document).ready(function(){
	
	event.preventDefault();
	// our current count, attached to the upper right hand corner of the browser
	var $currentCount = $('#counter');
	// our current form which will hold the question and subsequent answers loaded in the app.questions object.
	var $currentForm = $('form');
	// creates our first random question upon generating the game.html file
	app.currenQuestion = app.questions[Math.floor(Math.random()* app.questions.length)];
	
	//attaches the counter to the highscore on page

	//attaches the first question to the form onload
	$currentForm.prepend('<h3 class = "question"> Question: ' + app.currenQuestion.question + '</h3>' + '<br><br>');
	var counterElement = $('#counter');
	var updateCountOnPage = function(count) {
		counterElement.text(count);
	};
	updateCountOnPage(30);
	var createCheckbox = function(choice) {
		var div = $('<div></div>');
		var choiceText = $('<label></label>');
		choiceText.text(choice);
		var checkbox = $('<input type="checkbox" class="answer"/>');
		checkbox.val(choice);

		div.append(checkbox);
		div.append(choiceText);
		return div;
	};
	// appends all four answers to the corresponding question
	var answerGenerator = function (randomQuestion){
  	var choicesForm = $('.choices');
  	randomQuestion.choices.forEach(function(choice) {
  		var checkbox = createCheckbox(choice);
  		choicesForm.prepend(checkbox);
  	});
	};

	//adds a random question and its corresponding answers to our currentForm
	var QandAgenerator = function(){
		var randomQuestion = app.questions[Math.floor(Math.random()* app.questions.length)];

		var question = $('<h3></h3>');
		question.text(randomQuestion.question);
		app.currenQuestion = randomQuestion;
		return question;
	};
	// checks the answer when the user clicks "Am I right?"
	$('#checkAnswer').on('click',function(){
		event.preventDefault();
		// represents whichever check box the user clicks on
		var $userInput = $('input:checked');
		console.log(app.currenQuestion.correct);
		console.log($userInput.val());
		if($userInput.val() === app.currenQuestion.correct ){
			app.successDisplay();
			app.countIncrementor();
			updateCountOnPage(app.count);
			$currentCount.empty().append(app.count);
			$('.choices').empty().append(QandAgenerator());
			answerGenerator(app.currenQuestion);
		} else {
			app.failureDisplay();
		}		
	});

	$('#restart').on('click', function(){
		location.reload();
	});
	answerGenerator(app.currenQuestion);
});

