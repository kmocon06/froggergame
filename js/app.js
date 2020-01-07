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
	isColliding: false,
	isColliding: false,
	timer: 0,
	frog: $('#frog'),
	startGame() {

		this.moveFirstRedCars();
		this.moveFirstGreenCars();
		this.moveThirdRowCars();
		this.moveFourthRowCars();
		this.moveBusRow();
		this.moveFirstRowLogs();
		this.moveSecondRowLogs();
		this.moveThirdRowLogs();
		this.moveLastLogAndGator();

		this.timer = setInterval(() =>{
			this.carCollision();
			//console.log(this.frog.position());
			
		}, 2500)
	},
	// setTimer() {


	// 	const timer = setInterval(() =>{

	// 	}, 2500)
	// },
	moveCharacter(keyCode) {

		const position = this.frog.position();
		//const position = this.frog;
		//move the character up, down, left, and right
		//by using the keyCodes for the keyboard
		const height = $(window).innerHeight();
		const width = $(window).innerWidth();

		switch(keyCode) {
	 		case 87: //up - keycode 87 === W
	 			if(position.top < 762.765625 && position.top > -18.234375) {
	 				$('#frog').css('top', position.top - 50 + 'px');
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
		 			$('#frog').css('top', position.top + 50 + 'px');
	 			}

	 			break;


	 		case 65: //left - keyCode 65 === A
	 			if(position.left > 20 && position.left < 1170) {
	 				$('#frog').css('left', position.left - 50 + 'px');
	 			}

	 			break;

	 		case 68: //right - keyCode 68 === D
	 			if(position.left > -6 && position.left < 1105) {
	 				$('#frog').css('left', position.left + 50 + 'px');
	 			}

	 			break;
	 	}

	 // 	if($('#frog').position().top === -18.234375) {
		// 	this.levelCompleted();
		// }
	},

	moveFirstRedCars() {
		$('#red_car').css({left: 0});
		$('#red_car').animate({ left: '1000px' }, 7000, 'linear', () => {
			this.moveFirstRedCars();
		});

		$('#red_car2').css({left: '70px'});
		$('#red_car2').animate({ left: '1000px' }, 10000, 'linear', () => {
			this.moveFirstRedCars();
		});
	},
	moveFirstGreenCars() {
		$('#green_car').css({right: 0});
		$('#green_car').animate({ right: '1000px' }, 5000, 'linear', () => {
			this.moveFirstGreenCars();
		});

		$('#green_car2').css({right: '50px'});
		$('#green_car2').animate({ right: '1000px' }, 6000, 'linear', () => {
			this.moveFirstGreenCars();
		});
	},
	moveThirdRowCars() {
		$('#green_car3').css({left: 0});
		$('#green_car3').animate({ left: '1000px' }, 9000, 'linear', () => {
			this.moveThirdRowCars();
		});

		$('#green_car4').css({left: 100});
		$('#green_car4').animate({ left: '1000px' }, 5000, 'linear', () => {
			this.moveThirdRowCars();
		});
	},
	moveFourthRowCars() {
		$('#red_car3').css({right: 0});
		$('#red_car3').animate({ right: '1000px' }, 9000, 'linear', () => {
			this.moveFourthRowCars();
		});

		$('#red_car4').css({right: 100});
		$('#red_car4').animate({ right: '1000px' }, 5000, 'linear', () => {
			this.moveFourthRowCars();
		});
	},
	moveBusRow() {
		$('#bus').css({right: 0});
		$('#bus').animate({ right: '1000px' }, 9000, 'linear', () => {
			this.moveBusRow();
		});

		$('#bus2').css({right: 100});
		$('#bus2').animate({ right: '1000px' }, 5000, 'linear', () => {
			this.moveBusRow();
		});
	},
	moveFirstRowLogs() {
		$('#log1').css({left: 0});
		$('#log1').animate({ left: '1000px' }, 9000, 'linear', () => {
			this.moveFirstRowLogs();
		});

		$('#log2').css({left: 100});
		$('#log2').animate({ left: '1000px' }, 5000, 'linear', () => {
			this.moveFirstRowLogs();
		});
	},
	moveSecondRowLogs() {
		$('#log3').css({right: 0});
		$('#log3').animate({ right: '1000px' }, 9000, 'linear', () => {
			this.moveSecondRowLogs();
		});

		$('#log4').css({right: 100});
		$('#log4').animate({ right: '1000px' }, 5000, 'linear', () => {
			this.moveSecondRowLogs();
		});
	},
	moveThirdRowLogs() {
		$('#log5').css({right: 0});
		$('#log5').animate({ right: '1000px' }, 9000, 'linear', () => {
			this.moveThirdRowLogs();
		});

		$('#log6').css({right: 100});
		$('#log6').animate({ right: '1000px' }, 5000, 'linear', () => {
			this.moveThirdRowLogs();
		});
	},
	moveLastLogAndGator() {
		$('#log7').css({left: 0});
		$('#log7').animate({ left: '1000px' }, 9000, 'linear', () => {
			this.moveLastLogAndGator();
		});

		$('#gator').css({left: 100});
		$('#gator').animate({ left: '1000px' }, 5000, 'linear', () => {
			this.moveLastLogAndGator();
		});
	},
	carCollision() {
		//if any cars or buses collide with the frog, then the frog has lost a life

		const car1 = $('#red_car').position(); //height = 50 //width = 40
		const car2 = $('#red_car2').position(); //height = 50 //width = 40
		const frogger = this.frog.position(); //height = 58 //width = 70
		// frog.top = 710;
		// frog.left += 20;

		// console.log(car1);
		// RED CAR >>> {top: 710, left: 0}
		//     FROG >> {top: 711.765625, left: -5}

		// const car2Top = car2.top
		// const car2Bottom = car2.top + 58

		// console.log(car2.left);
		console.log(this.frog.width);

		


		if(car2.left < frog.right) {
			this.frogDies();
		}

		console.log('RED CAR >>> ',car2);
		console.log('FROG >>',frog);


		//if frog position is in range of (710  and 500)
		// if(car1.left < frog.left + frog.width && car1.left + car1.width > frog.left 
		// 	&& car1.top < frog.top + frog.height && car1.height > frog.top) {
		// 	this.frogDies();
		// }



	},
	frogDies() {
		const $div = $('<div></div>');
		$div.id = $('frog_dies');
		$div.append('<img id="dead_frog" src="SkullPixelart.png" />');
		$(document.body).append($div);
	},
	levelCompleted() {

	},
	printScore() {
		//print the high score of the user onto the screen 
		if(event.keyCode === 87) {
			$('#score').text(this.score);
		}
	}	
}


froggerGame.startGame();

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



//EVENT LISTENERS 

$(document).on('keydown', (event) => {
	froggerGame.moveCharacter(event.keyCode);
});


//$(document).keydown(froggerGame.keyDownHandler);
//document.addEventListener('keyup', froggerGame.keyUpHandler(), false)

//$(#frog).