$(document).ready(function() {



    var boxnummer = 0;
    var breite;
    var hoehe;
    var xpos;
    var ypos;
    var pokenummer = 0;
    var kennung;
    var gefangen = 0;
    var zeit = 20;
	var zeitgeber = 0;
	
	
		// Ausgabe der Informationen



			
	$("#start").click(function() {
	if (zeitgeber == 0){	
	$("#spiel").html("");
	$("#musik").html("<audio autoplay id='bgsound'><source src='media/pokesong3.mp3' type='audio/mp3'></audio>");
    zeitgeber = setInterval(function() {
        wuerfelo();
    }, 500);
		} // if
	});




    function wuerfelo() {

            boxnummer++;
			kennung = "box" + boxnummer;
			
			
			// Nummer des Bildes
            nummer1 = String(Math.floor((Math.random() * 7) + 0));
            nummer2 = String(Math.floor((Math.random() * 9) + 0));
            nummer3 = String(Math.floor((Math.random() * 9) + 0));
            pokenummer = nummer1 + nummer2 + nummer3;

           



			// Generierung der Position des Elements
            breite = $(window).width() * 0.8 - 160;
            hoehe = $(window).height() * 0.7 - 110;
            xpos = parseInt(Math.random() * breite);
            ypos = parseInt(Math.random() * hoehe);


			// Zeitzaehler
            zeit--;
		


			// Anzeigen des Elements im DIV "spiel" und Veraenderung von dessen Position mithilfe verschiedener IDs
			
            $("#spiel").append($("<img src='media/pokesprites/" + pokenummer + ".png' id='" + kennung + "' class='absolut' />"));
            $("#" + kennung).css({
                'top': ypos,
                'left': xpos,

            });


			// Wegklicken des Elements
            $("#" + kennung).click(function() {
                $(this).remove();
				
				// Zaehler der weggeklickten Elemente
                gefangen++;
				
				// Bedingung fuer das Gewinnen
                if (gefangen == 10 && zeit > 0) {
                    clearInterval(zeitgeber);
					zeitgeber = 0;
					zeit = 20;
					gefangen = 0;
					$("#gefangen").html("10");
					$("#spiel").html("Gewonnen!");
				
                }

            });
			
			// Bedingung fuer das Verlieren
            if (zeit < 1) {							
                clearInterval(zeitgeber);
				zeitgeber = 0;
				zeit = 20;
				gefangen = 0;
                $("#spiel").html("Leider zu langsam. Versuch's erneut!");

            }


			$("#gefangen").html(gefangen);
			$("#zeit").html(zeit);



        } // Wueferlo Ende

 			


}); // Ready