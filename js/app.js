//Frogger Game
//First create a character who is able to move in all directions 
//(upwards, left, right, downwards)

//you start the game at level 1 and as soon as you get to the top, you have 
//completed that level



// class Player {
// 	constructor(level, score)
// }


const froggerGame = {
	level: 1,
	score:0,
	upPressed: false,
	downPressed: false,
	leftPressed: false,
	rightPressed: false,
	moveCharacter(keyCode) {

		const position = $('#frog').position();
		//move the character up, down, left, and right
		//by using the keyCodes for the keyboard
		const height = $(window).innerHeight();
		const width = $(window).innerWidth();

		switch(keyCode) {
	 		case 87: //up - keycode 87 === W
	 			if(position.top < 762.765625 && position.top > -18.234375) {
	 				$('#frog').css('top', position.top - 30 + 'px');
	 			}

	 			this.score += 10;
	 			this.printScore();
	 			break;

	 		case 83: //down - keyCode 83 === S
	 			// if frog is already at the bottom
	 				// do nothing
	 			// else 
	 			if(position.top < 732.765625 && position.top > -48.234375) {
	 			// 	$('#frog').css('top', position.top === 731.765625);
	 			// } else {
		 			$('#frog').css('top', position.top + 30 + 'px');
	 			}

	 			break;


	 		case 65: //left - keyCode 65 === A
	 			if(position.left > 20 && position.left < 1170) {
	 				$('#frog').css('left', position.left - 30 + 'px');
	 			}

	 			break;

	 		case 68: //right - keyCode 68 === D
	 			if(position.left > -6 && position.left < 1105) {
	 				$('#frog').css('left', position.left + 30 + 'px');
	 			}

	 			break;
	 	}



	},
	printScore() {
		//print the high score of the user onto the screen 
		if(event.which === 87) {
			$('#score').text(this.score);
		}
	}	
	// keyDownHandler(event) {
	// 	if(event.keyCode === 87) {
 //        	upPressed = true;
 //    	} else if(event.keyCode === 83) {
 //        	downPressed = true;
 //    	} 

	// 	if(event.keyCode === 65) {
 //    		leftPressed = true;
 //    	} else if(event.keyCode === 68) {
 //    		rightPressed = true;
 //    	}
	// },
	// keyUpHandler(event) {
	// 	if(event.keyCode === 87) {
 //        	upPressed = false;
 //    	} else if(event.keyCode === 83) {
 //        	downPressed = false;
 //    	} 

 //    	if(event.keyCode === 65) {
 //    		leftPressed = false;
 //    	} else if(event.keyCode === 68) {
 //    		rightPressed = false;
 //    	}
	// },
}





//EVENT LISTENERS 

$(document).on('keydown', (event) => {
	froggerGame.moveCharacter(event.keyCode);
});


//$(document).keydown(froggerGame.keyDownHandler);
//document.addEventListener('keyup', froggerGame.keyUpHandler(), false)

//$(#frog).