document.addEventListener('DOMContentLoaded', function() {
  let openingScreen = document.querySelector('.openingScreen');
  let pathButton = document.querySelector('.pathButton');
  let offPathButton = document.querySelector('.offPathButton');
  let pathScreen = document.querySelector('.pathScreen');
  let offPathScreen = document.querySelector('.offPathScreen');
  let alienButton = document.querySelector('.alienButton');
  let houseButton = document.querySelector('.houseButton');
  let alienScreen = document.querySelector('.alienScreen');
  let houseScreen = document.querySelector('.houseScreen');
  let conclusionScreen = document.querySelector('.conclusionScreen');

  
  function showScreen(screen) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(function(screen) {
      screen.style.display = 'none';
    });
    screen.style.display = 'block';
  }

  pathButton.onclick = function() {
    showScreen(pathScreen);
  };

  offPathButton.onclick = function() {
    showScreen(offPathScreen);
  };

  alienButton.onclick = function() {
    showScreen(alienScreen);
    
  };

  houseButton.onclick = function() {
    showScreen(houseScreen);

  };

  showScreen(openingScreen);
});


alienScreen.onclick = function(){
showScreen(conclusionScreen);

  }

offPathScreen.onclick = function(){
showScreen(houseScreen);
  
}
l.onkeydown = function(){
body.backgroundColor = "red";
  
}