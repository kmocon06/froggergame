//Frogger Game
//First create a character who is able to move in all directions 
//(upwards, left, right, downwards)
// class Player {
// 	constructor(level, score)
// }


const froggerGame = {
	upPressed: false,
	downPressed: false,
	leftPressed: false,
	rightPressed: false,
	moveUp() {

	},
	moveDown() {

	},
	moveLeft() {

	},
	moveRight() {

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


console.log(froggerGame.upPressed);





//EVENT LISTENERS 

document.addEventListener('keydown', function(event) {

    console.log(event.which);
    console.log(event.key);
	// if(event.which === 87) {
 //        	froggerGame.upPressed = true;
 //    	} else if(event.which === 83) {
 //        	froggerGame.downPressed = true;
 //    	} else if(event.which === 65) {
 //    		froggerGame.leftPressed = true;
 //    		$('#frog').css('margin-right', '50px');
 //    	} else if(event.which === 68) {
 //    		$('#frog').css('margin-left', '10px');
 //    		froggerGame.rightPressed = true;
 //    	}
	 const position = $('#frog').position();
	 switch(event.which) {
	 	case 87: //up
	 		$('#frog').css('top', position.top - 10 + 'px');
	 		break;
	 	case 83: //down
	 		$('#frog').css('top', position.top + 10 + 'px');
	 		break;
	 	case 65: //left
	 		$('#frog').css('left', position.left - 10 + 'px');
	 		break;
	 	case 68: //right
	 		$('#frog').css('left', position.left + 10 + 'px');
	 		break;
	 }
});


//$(document).keydown(froggerGame.keyDownHandler);
//document.addEventListener('keyup', froggerGame.keyUpHandler(), false)

//$(#frog).