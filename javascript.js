// In dit bestand doen we speciale dingen zoals berichtjes tonen bij een klik enz
$(function() {
	// Hier doen we dingen als je klikt op de magister link
	// - Let op hoe het #magister-link gelijk is aan het id="magister-link"
	// - De ".click(function() {" betekend dat we iets willen doen als je klikt op de link
	// - De "return confirm('...')" betekend dat we om een bevestiging willen vragen voor iets en alleen doorgaan als er op OK geklikt is
	$('#magister-link').click(function() {
		return confirm('Paz op! Je gaat naar Magister, dat kan slecht zijn voor je gezondheid!!!');
	});

	$('#plaatje').click(function() {
		// Hier zeggen we "als de confirm waar is, dan willen we doen wat tussen de accolades staat" 
		if ( confirm('Wil je deze onwaarheid laten verdwijnen?') )
		{
			// Hier verbergen we het plaatje
			$('#plaatje').hide();
		}
	});
});