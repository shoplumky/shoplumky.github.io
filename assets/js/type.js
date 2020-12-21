// # - Développé par: Keany Vy KHUN
// # - Sous Licence : MIT
// # - Projet: Boutique Lumky
// # - Description: Boutique e-commerce
// # - Status: Non fonctionnel

function page404() {
  var element = document.getElementById('404-title');
  var textinto = element.textContent;
  element.innerHTML = '';
  var i = 0;
  var txt = textinto;
  var speed = 150;

  function typeTitle() {
    if (i < txt.length) {
      element.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeTitle, speed);
    }
  }
  typeTitle()
}
