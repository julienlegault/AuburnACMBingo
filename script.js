var coloredArray = [];
var arrayOfPhrases = ["We go to subway.", "Powerpoint breaks.", "Can't connect to the projector.", "Have to roll up the screen.", "Pole gets in the way.", "Cursing.", "Someone is playing video games instead of working.", "Someone is doing other classwork.", "Graphs.", "Whiteboard marker doesn't work.", "Less than 12 people show up.", "Someone shits on Windows.", "Someone finishes a problem.", "We can't get into the room.", "Someone shits on Emacs.", "Vim is mentioned.", "Go is mentioned.", "Java has to use weird variable types (longs, arraylists, etc.).", "Something is thrown.", "Someone skipped class today.", "Umphress is mentoned.", "Nobody likes their senior design.", "Someone is wearing cargo shorts.", "Booze is mentioned.", "Google is mentioned."]

window.onload = function() {
   var cells = document.getElementById('table').getElementsByTagName('td');
      for(i = 0; i < cells.length; i++) {
         if(i != 12) {
				var randomNumber = Math.floor(Math.random() * arrayOfPhrases.length);
				var newText = arrayOfPhrases[randomNumber];
				cells[i].textContent = newText;
            cells[i].addEventListener('click', turnRed);
				arrayOfPhrases.splice(randomNumber, 1);
         }
      }
         cells[12].style.background="#F0522C";
         coloredArray.push(cells[12]);
}

function turnRed() {
   this.style.background="#F0522C";
   coloredArray.push(this);
   checkVictory();
}

function checkVictory() {
   if(test(0) && test(1) && test(2) && test(3) && test(4)) { turnGreen(1) }
   if(test(5) && test(6) && test(7) && test(8) && test(9)) { turnGreen(2) }
   if(test(10) && test(11) && test(12) && test(13) && test(14)) { turnGreen(3) }
   if(test(15) && test(16) && test(17) && test(18) && test(19)) { turnGreen(4) }
   if(test(20) && test(21) && test(22) && test(23) && test(24)) { turnGreen(5) }
   if(test(0) && test(5) && test(10) && test(15) && test(20)) { turnGreen(6) }
   if(test(1) && test(6) && test(11) && test(16) && test(21)) { turnGreen(7) }
   if(test(2) && test(7) && test(12) && test(17) && test(22)) { turnGreen(8) }
   if(test(3) && test(8) && test(13) && test(18) && test(23)) { turnGreen(9) }
   if(test(4) && test(9) && test(14) && test(19) && test(24)) { turnGreen(10) }
   if(test(0) && test(6) && test(12) && test(18) && test(24)) { turnGreen(11) }
   if(test(4) && test(8) && test(12) && test(16) && test(20)) { turnGreen(12) }
}

function turnGreen(value) {
   switch(value) {
   case 1:
      greeny([0, 1, 2, 3, 4]);
      break;
   case 2:
      greeny([5, 6, 7, 8, 9]);
      break;
   case 3:
      greeny([10, 11, 12, 13, 14]);
      break;
   case 4:
      greeny([15, 16, 17, 18, 19]);
      break;
   case 5:
      greeny([20, 21, 22, 23, 24]);
      break;
   case 6:
      greeny([0, 5, 10, 15, 20]);
      break;
   case 7:
      greeny([1, 6, 11, 16, 21]);
      break;
   case 8:
      greeny([2, 7, 12, 17, 22]);
      break;
   case 9:
      greeny([3, 8, 13, 18, 23]);
      break;
   case 10:
      greeny([4, 9, 14, 19, 24]);
      break;
   case 11:
      greeny([0, 6, 12, 18, 24]);
      break;
   case 12:
      greeny([4, 8, 12, 16, 20]);
      break;
   }
}

function greeny(array) {
   var cells = document.getElementById('table').getElementsByTagName('td');
   for(i=0; i<array.length;i++){
      cells[array[i]].style.background="#7EC243";
   }
}

function test(number) {
   var cells = document.getElementById('table').getElementsByTagName('td');
   return coloredArray.includes(cells[number]);
}
