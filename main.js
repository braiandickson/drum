function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // sets 'audio' with the sound's source from the html tag;
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!audio) return; // stop if 'audio' is null;

  key.classList.add('playing'); // Adds the 'playing' class to the div data-key tag;
  audio.currentTime = 0; // rewind the audio to the start;
  audio.play(); // play it;
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // return if the element has not the 'transform' class;
  e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitioned', removeTransition));
window.addEventListener('keydown', playSound);