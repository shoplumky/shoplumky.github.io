// # - Développé par: Keany Vy KHUN
// # - Sous Licence : MIT
// # - Projet: Boutique Lumky
// # - Description: Boutique e-commerce
// # - Status: Non fonctionnel

function compte_a_rebours()
{
	var compte_a_rebours = document.getElementById("p");

	var date_actuelle = new Date();
	var date_evenement = new Date("Jan 10 00:00:00 2021");
	var date_lancement = new Date("Dec 17 00:00:00 2020");
	var total_secondes = (date_evenement - date_actuelle) / 1000;




  function diffdate(d1,d2,u){
    div=1
    switch(u){
      case 's': div=1000;
        break;
      case 'm': div=1000*60
      break;
      case 'h': div=1000*60*60
      break;
      case 'd': div=1000*60*60*24
      break;
    }

    var Diff = d2.getTime() - d1.getTime();
    return Math.ceil((Diff/div))
  }
  var total_jours = diffdate(date_lancement,date_evenement,'d');




	var prefixe = "";
	if (total_secondes < 0)
	{
    //cas ou il est fini et on affiche depuis combien de temps il est fini
	}
	if (total_secondes > 0)
	{
		var jours = Math.floor(total_secondes / (60 * 60 * 24));
		var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
		minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
		secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

    function timeInDeg(_elem, _class) {
      var deg = (360/60)*(60-_elem);
      if(_class == "heures") {deg = (360/24)*(24-_elem);}
      if(_class == "jours") {deg = (360/total_jours)*(total_jours-_elem);}
      if(deg<180) {
        $("."+_class+" #portion2").css("transform", "rotate("+0+"deg)");
        $("."+_class+" #portion1 .embed").css("transform", "rotate("+deg+"deg)");
        $("."+_class+" #portion2 .embed").css("transform", "rotate("+deg+"deg)");
      }else{
        $("."+_class+" #portion1 .embed").css("transform", "rotate(180deg)");
        $("."+_class+" #portion2 .embed").css("transform", "rotate(180deg)");
        deg = deg-180;
        if(deg >= 180 ) deg = 178
        $("."+_class+" #portion2").css("transform", "rotate("+deg+"deg)");
      }
      $("."+_class+" #time").html(_elem);
    }
    timeInDeg(secondes, "secondes");
    timeInDeg(minutes, "minutes");
    timeInDeg(heures, "heures");
    timeInDeg(jours, "jours");

	}
	else
	{
    //Compte à rebours terminé

	}
	var actualisation = setTimeout("compte_a_rebours();", 1000);
}
compte_a_rebours();
