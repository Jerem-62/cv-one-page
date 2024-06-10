$(function(){
	var words = [
		'un Technicien de Maintenance Informatique',
	],
	i = 0;
	
		// on gère l'affichage du menu responsive pour les écrans inférieurs ou égaux à medium (<992)
		$(".navbar-responsive").toggle();
		
		$(".menu").click(function () {
			$(".navbar-responsive").toggle("slow");
		});
		
		// on gère l'affichage aléatoire d'accroche du header (toutes les 3.5s)
		setInterval(function (){
			$("#word").fadeOut(function() {
					$(this).html(words[i = (i + 1) % words.length]).fadeIn();
			});
		},3500)
		// on gére le scroll vers les differentes section du site
		$("scroll").click(function() {
			var section = $("." + this.id);
			$("html,body").animate({scrollTop: section.offset().top}, 'slow');
		});
		
		// on gèere l affichage des progressbar pour les compétences
		window.sr = ScrollReveal();
		sr.reveal('.progess-bar', {
			origin: 'left',
			duration: 2000,
			distance: '100%'
		})
});