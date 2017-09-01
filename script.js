var arrayOfPhrases = ["We go to subway.", "Powerpoint breaks.", "Can't connect to the projector.", "Have to roll up the screen.", "Pole gets in the way.", "Cursing.", "Someone is playing video games instead of working.", "Someone is doing other classwork.", "Graphs.", "Whiteboard marker doesn't work.", "Less than 12 people show up.", "Someone shits on Windows.", "Someone finishes a problem.", "We can't get into the room.", "Someone shits on Emacs.", "Vim is mentioned.", "Go is mentioned.", "Java has to use weird variable types (longs, arraylists, etc.).", "Something is thrown.", "Someone skipped class today.", "Umphress is mentoned.", "Nobody likes their senior design.", "Someone is wearing cargo shorts.", "Booze is mentioned.", "Google is mentioned."]

window.onload = function() {
   var cells = document.getElementById('table').getElementsByTagName('th');
      for(i = 0; i < cells.length; i++) {
         if(i != 12) {
				var randomNumber = Math.floor(Math.random() * arrayOfPhrases.length);
				var newText = arrayOfPhrases[randomNumber];
				cells[i].textContent = newText;
            cells[i].addEventListener('click', turnRed);
				arrayOfPhrases.splice(randomNumber, 1);
         }
         cells[12].style.background="#F0522C";
		}
}

function turnRed() {
   this.style.background="#F0522C";
   checkVictory();
}

function checkVictory() {

}
