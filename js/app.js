//Frogger Game
//First create a character who is able to move in all directions 
//(upwards, left, right, downwards)



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
	moveCharacter() {
		const position = $('#frog').position();
		switch(event.which) {
	 		case 87: //up
	 			$('#frog').css('top', position.top - 30 + 'px');
	 			froggerGame.score += 10;
	 			break;
	 		case 83: //down
	 			$('#frog').css('top', position.top + 30 + 'px');
	 			break;
	 		case 65: //left
	 			$('#frog').css('left', position.left - 30 + 'px');
	 			break;
	 		case 68: //right
	 			$('#frog').css('left', position.left + 30 + 'px');
	 			break;
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


console.log(froggerGame.upPressed);





//EVENT LISTENERS 

document.addEventListener('keydown', function(event) {

	// const position = $('#frog').position();
	// switch(event.which) {
	//  	case 87: //up
	//  		$('#frog').css('top', position.top - 30 + 'px');
	//  		froggerGame.score += 10;
	//  		break;
	//  	case 83: //down
	//  		$('#frog').css('top', position.top + 30 + 'px');
	//  		break;
	//  	case 65: //left
	//  		$('#frog').css('left', position.left - 30 + 'px');
	//  		break;
	//  	case 68: //right
	//  		$('#frog').css('left', position.left + 30 + 'px');
	//  		break;
	//  }
	froggerGame.moveCharacter();
	 console.log(froggerGame.score)
});


//$(document).keydown(froggerGame.keyDownHandler);
//document.addEventListener('keyup', froggerGame.keyUpHandler(), false)

//$(#frog).