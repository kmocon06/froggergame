//Frogger Game
//First create a character who is able to move in all directions 
//(upwards, left, right, downwards)

//you start the game at level 1 and as soon as you get to the top, you have 
//completed that level





// class Player {
// 	constructor(level, score)
// }

class Cars {
	constructor(image, position, height, width) {
		this.position = position;
		this.height = height;
		this.width = width;
	}
}

class Player {
	constructor(player, score) {
		this.player = player;
		this.score = score;
	}
}


const froggerGame = {
	player1Turn: false,
	player2Turn: false,
	level: 1,
	player1Score:0,
	player2Score: 0,
	rounds: 0,
	player1Lives: 5,
	player2Lives: 5,
	// upPressed: false,
	// downPressed: false,
	// leftPressed: false,
	// rightPressed: false,
	isColliding: false,
	timer: 0,
	frog: $('#frog'),
	frogStartingPosition: {top: 761.9965744018555,left: 600.0000406801701},
	frogOnLog: false,
	startGame() {

		this.player1Turn = true;
		// const player1 = new Player(player1, 0);
		// const player2 = new Player(player2, 0);
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
			if(this.player1Lives >= 1 || this.player2Lives >= 1) {
				this.carCollision();
				this.frogAttachesToLog();

			}
			//console.log(this.frog.position());
			
		}, 2500)
	},
	// setTimer() {


	// 	const timer = setInterval(() =>{

	// 	}, 2500)
	// },
	switchPlayer() {

		if(this.player1Lives <= 0) {
			this.player1Turn = false;
			this.player2Turn = true;
		}
	},
	moveCharacter(keyCode) {

		let position = this.frog.position();

		//console.log(position);
		//const position = this.frog;
		//move the character up, down, left, and right
		//by using the keyCodes for the keyboard
		// const height = $(window).innerHeight();
		// const width = $(window).innerWidth();

		switch(keyCode) {
	 		case 87: //up - keycode 87 === W
	 			if(position.top < 762.765625 && position.top > -18.234375) {
	 				$('#frog').css('top', position.top - 50 + 'px');
	 			}

	 			if(this.player1Turn) {
	 				this.player1Score += 10;
	 				this.printScore();
	 			} else {
	 				this.player2Score += 10;
	 				this.printScore();
	 			}

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

	 			if(this.player1Turn) {
	 				this.player1Score -= 10;
	 				this.printScore();
	 			} else {
	 				this.player2Score -= 10;
	 				this.printScore();
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
		$('#red_car').animate({ left: '1000px' }, 13000, 'linear', () => {
			this.moveFirstRedCars();
		});

		$('#red_car2').css({left: '70px'});
		$('#red_car2').animate({ left: '1000px' }, 9000, 'linear', () => {
			this.moveFirstRedCars();
		});
	},
	moveFirstGreenCars() {
		$('#green_car').css({right: 0});
		$('#green_car').animate({ right: '1000px' }, 5000, 'linear', () => {
			this.moveFirstGreenCars();
		});
	},
	moveThirdRowCars() {
		$('#green_car2').css({left: 0});
		$('#green_car2').animate({ left: '1000px' }, 7000, 'linear', () => {
			this.moveThirdRowCars();
		});

		$('#green_car3').css({left: 100});
		$('#green_car3').animate({ left: '1000px' }, 5000, 'linear', () => {
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
		$('#bus').animate({ right: '1000px' }, 12000, 'linear', () => {
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
		$('#log4').animate({ right: '1000px' }, 7000, 'linear', () => {
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
		$('#log7').animate({ left: '1000px' }, 7000, 'linear', () => {
			this.moveLastLogAndGator();
		});

		$('#gator').css({left: 100});
		$('#gator').animate({ left: '1000px' }, 10000, 'linear', () => {
			this.moveLastLogAndGator();
		});
	},
	carCollision() {
		//if any cars or buses collide with the frog, then the frog has lost a life


		// const redCar1 = new Cars($('#red_car'), 'absolute', 70, 58);
		// console.log(redCar1);
		// const car1 = $('#red_car').position();
		//  //height = 50 //width = 40
		// const car1Height = $('#red_car').height();
		// const car1Width =$('#red_car').width();
		// const car2 = $('#red_car2').position(); //height = 50 //width = 40
		// const car2Height = $('#red_car2').height();
		// const car2Width =$('#red_car2').width();
		const frog = this.frog.position(); //height = 58 //width = 70
		const frogHeight = this.frog.height();
		const frogWidth = this.frog.width();

		const allCars = $('.car');
		// console.log(allCars);

		for(let i = 0; i < allCars.length; i++) {
			let currentCar = allCars[i];
		
			if (currentCar.x < frog.left + frogWidth &&
   			currentCar.x + currentCar.width > frog.left &&
   			currentCar.y < frog.top + frogHeight &&
   			currentCar.y+ currentCar.height > frog.top) {
    	// collision detected!
    			this.frogDies();
    			this.frogReset();

    			if(this.player1Lives <= 0) {
    				this.switchPlayer();
    			}

			}
		}

		//if the first car left position is less than the frog left position plus the 
		//frog width, and the car left position plus the car width is greater than the 
		//frog left position, and the car top position is less than the frog top position 
		//and frog height, and the car top position plus the car height is greater than the frog
		//top

		// if (car1.left < frog.left + frogWidth &&
  //  			car1.left + car1Width > frog.left &&
  //  			car1.top < frog.top + frogHeight &&
  //  			car1.top + car1Height > frog.top) {
  //   	// collision detected!
  //   		this.frogDies();
  //   		this.frogReset();

		// } else if (car2.left < frog.left + frogWidth &&
  //  			car2.left + car2Width > frog.left &&
  //  			car2.top < frog.top + frogHeight &&
  //  			car2.top + car2Height > frog.top) {
		// 		this.frogDies();
		// 		this.frogReset();
		// } 

/*		else if (car2.left < frog.left + frogWidth &&
   			car2.left + car2Width > frog.left &&
   			car2.top < frog.top + frogHeight &&
   			car2.top + car2Height > frog.top) {
				this.frogDies();
				this.frogReset();
		}*/ 	

		// console.log('RED CAR >>> ',car2);
		// console.log('FROG >>',frog);
	},
	frogAttachesToLog() {
		//log speed = 9000 
		const log1Position = $('#log1').position();
		const log1Width = $('#log1').width();
		const log1Height = $('#log1').height();

		// console.log($('#log1'))
		// console.log(log1Speed);
		let frog = this.frog.position(); //height = 58 //width = 70
		const frogHeight = this.frog.height();
		const frogWidth = this.frog.width();

		// if(this.frogOnLog !== false) {
		// 	this.frog.position().left += log1Speed;
		// }

		if (log1Position.left < frog.left + frogWidth &&
   			log1Position.left + log1Width > frog.left &&
   			log1Position.top < frog.top + frogHeight &&
   			log1Position.top + log1Height > frog.top) {
    	// collision detected!
    		this.frogOnLog = true;
    		// this.frog.css({left: 0});
		// 	this.frog.animate({ left: '1000px' }, 9000, 'linear', () => {
		// });

			frog.left = log1Position.left;
			frog.top = log1Position.top;
			this.frog.css()

		}

		// console.log('log', log1Position);
		// console.log('frog', frog);

	},
	frogDies() {
		const $div = $('<div></div>');
		$div.id = $('frog_dies');
		$div.append('<img id="dead_frog" src="SkullPixelart.png" />');
		$div.css({display: 'inline-block'});
		$(document.body).append($div);
		
		if(this.player1Turn) {
			this.player1Lives--;
		} else {
			this.player2Lives--;
		}

		if(this.player1Lives <= 0 && this.player2Lives <= 0) {
			this.gameOver();
		}
	},
	frogReset() {
		// console.log(this.frog.position())
		// const r = this.frog.position.left;
		// const s =this.frog.position.top;
		// {top: 761.9965744018555,left: 600.0000406801701}
		// $('#frog').css(position.top, 761.9965744018555);
		// $('#frog').css(position.left, 600.0000406801701);
		// $('#frog').css('top', position.top = 761.9965744018555);
		let position = this.frog.position();
		$('#frog').css('top', 761.9965744018555);
		$('#frog').css('left', 600.0000406801701);


	},
	levelCompleted() {
		this.level++;
		$('#level').text(this.level);
	},
	printScore() {
		//print the high score of the user onto the screen 
		if(event.keyCode === 87) {
			$('#score1').text(this.player1Score);
			$('#score2').text(this.player2Score);
		}
	},
	gameOver() {
		const $div = $('<div></div>');
		$div.append('<img id="game_over" src="GameOver.jpg"/>');
		$div.css({display: 'center'});
		$div.append($('.board'));
		$(document.body).append($div);
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