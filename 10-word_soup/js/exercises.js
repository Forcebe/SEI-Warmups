$(document).ready(function () {
	//get the text from our hidden div, convert it to an array of words
	const text = ($(".words").html()).trim();
	const words = text.split(' ');

	//pick a random word from the array
	const getWord = function() {
		const index = Math.floor(Math.random() * Math.floor(words.length));
		return words[index];
	}

	const newDiv = function() {
		//create a new div with our word
		const $newdiv = $(`<p class="word-appear" >${getWord()}</p>`);
		//set a random position for our word to appear
		const posX = (Math.random() * ($(window).width()) - 25).toFixed();
		const posY = (Math.random() * ($(window).height())- 10).toFixed();
		//set the CSS
		$newdiv.css({
			'position': 'absolute',
			'left': posX + 'px',
			'top': posY + 'px',
		})
		$('body').append($newdiv);
		//function to remove the word
		setInterval(function() {
			$newdiv.remove()
		}, 1000)
	}
	//add a word every 1000ms
		setInterval(function() {
			newDiv()
	}, 100);
})

//This went pretty well. I had up to the remove function done, didn't add any animation
