var checkedBoxes = [];
var vCondOne = ["box00", "box01", "box02", "box03", "box04"];
var vCondTwo = ["box10", "box11", "box12", "box13", "box14"];
var vCondThree = ["box20", "box21", "box22", "box23", "box24"];
var vCondFour = ["box30", "box31", "box32", "box33", "box34"];
var vCondFive = ["box40", "box41", "box42", "box43", "box44"];
var vCondSix = ["box00", "box10", "box20", "box30", "box40"];
var vCondSeven = ["box01", "box11", "box21", "box31", "box41"];
var vCondEight = ["box02", "box12", "box22", "box32", "box42"];
var vCondNine =["box03", "box13", "box23", "box33", "box43"];
var vCondTen = ["box04", "box14", "box24", "box34", "box44"];
var vCondEleven = ["box00", "box11", "box22", "box33", "box44"];
var vCondTwelve = ["box40", "box31", "box22", "box13", "box04"];
var arrayOfPhrases = ["We go to subway.", "Powerpoint breaks.", "Can't connect to the projector.", "Have to roll up the screen.", "Pole gets in the way.", "Cursing.", "Someone is playing video games instead of working.", "Someone is doing other classwork.", "Graphs.", "Whiteboard marker doesn't work.", "Less than 12 people show up.", "Someone shits on Windows.", "Someone finishes a problem.", "We can't get into the room.", "Someone shits on Emacs.", "Vim is mentioned.", "Go is mentioned.", "Java has to use weird variable types (longs, arraylists, etc.).", "Something is thrown.", "Someone skipped class today.", "Umphress is mentoned.", "Nobody likes their senior design.", "Someone is wearing cargo shorts.", "Booze is mentioned.", "Google is mentioned."]

window.onload = function() {
	for (i = 0; i < 5; i++) {
		for (j = 0; j < 5; j++) {
			if (i==2 && j==2) {
			}
			else {
				var element = "box" + i + j;
				var elementReal = document.getElementById(element);
				var randomNumber = Math.floor(Math.random() * arrayOfPhrases.length);
				var newText = arrayOfPhrases[randomNumber];
				elementReal.textContent = newText;
				arrayOfPhrases.splice(randomNumber, 1);
			}
		}
	}
	transform(vCondOne);
	transform(vCondTwo);
	transform(vCondThree);
	transform(vCondFour);
	transform(vCondFive);
	transform(vCondSix);
	transform(vCondSeven);
	transform(vCondEight);
	transform(vCondNine);
	transform(vCondTen);
	transform(vCondEleven);
	transform(vCondTwelve);
	checkedBoxes.push(document.getElementById("box22"));
}

function turnRed(id) {
	id.style.background="#F0522C";
	checkedBoxes.push(id);
	containsTest(checkedBoxes, vCondOne);
	containsTest(checkedBoxes, vCondTwo);
	containsTest(checkedBoxes, vCondThree);
	containsTest(checkedBoxes, vCondFour);
	containsTest(checkedBoxes, vCondFive);
	containsTest(checkedBoxes, vCondSix);
	containsTest(checkedBoxes, vCondSeven);
	containsTest(checkedBoxes, vCondEight);
	containsTest(checkedBoxes, vCondNine);
	containsTest(checkedBoxes, vCondTen);
	containsTest(checkedBoxes, vCondEleven);
	containsTest(checkedBoxes, vCondTwelve);
}

function transform(array) {
	for (i = 0; i < 5; i++) {
		array[i] = document.getElementById(array[i]);
	}
}

function contains(array, object) {
	var i = array.length;
	while (i--) {
		if (array[i] == object) {
			return true;
		}
	}
	return false;
}

function containsTest(array, second) {
	if(contains(array, second[0]) && contains(array, second[1]) && contains(array, second[2]) && contains(array, second[3]) && contains(array, second[4])) {
		victoryTest(second);
	}
}

function victoryTest(array) {
		for (i = 0; i < 5; i++) {
			array[i].style.background="#7DC243";
		}
}