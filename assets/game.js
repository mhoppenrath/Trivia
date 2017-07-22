$(document).ready(function() {
	// set variables for inital start
	var score = 0; //keeps track of the score which will print out at the end
	var firstQuestion = true; //var for if it is a new game or not
	var questionCount = GoTfactoids.length; //makes the end of the game
	var progress = 0; //this tracks the progress ingame so far
	var intervalId; // the counter variable
	var randomPicker; //which question is picked. This is global because I want it to go between functions

	//set the timer that will stop when  it goes to an answer screen and restart when it goes to question
	$('#hiddenResult').on('click', function() {
		if (firstQuestion) {
			firstQuestion = false;
        	intervalId = setInterval(firstTimerStart, 1000);
        	timeLeft = 30;
        	newQuestion()
        }
	});
	function firstTimerStart () { // creates the time and when it hits zero it goes to the annswer screen
    	timeLeft --;
    	$('#timer').html(timeLeft);
    	if (timer === 0) {
    		img = ()
    	}


	}
	function answeredQuestion() {
		clearInterval(intervalId);

	}
	function newQuestion() {
	randomPicker = Math.floor(Math.random() * (questionCount));
	if (!GoTfactoids[randomPicker].previousDone) {
		$('#questionHolder').html(GoTfactoids[randomPicker].question)
			for (i = 0; i<4;i++){
			$('#answersHolder').append(GoTfactoids[randomPicker].answer[i] + "<br>")
			}
		}
	else { newQuestion()}
	}

});