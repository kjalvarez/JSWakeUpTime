$(document).on('ready', function() {
	var innerShell = $('<div>I am the inner shell</div>');
	var outerShell = $('<div>I am the outer shell</div>');
	var pmLabel = $('<div class= "labelStyle">PM</div>');
	var autoLabel = $('<div class= "labelStyleAuto">AUTO</div>');
	var clockScreen = $('<div class= "labelStyleScreen">12:00</div>');
	var amPMlabel = $('<div class="dotStyle"></div>');
	var amFreqlabel = $('<div class="amfm1">AM</div>');
	var amFreqlabelNum = $('<div class="amfmNum">53 60 70 90 110 140 170 x10 KHz</div>')
	var fmFreqlabel = $('<div class="amfm2">FM</div>');
	var fmFreqlabelNum = $('<div class="amfmNum">88 92 96 102 106 108 MHz</div>');
	


		$('.container').append(innerShell);
		$(innerShell).addClass("innerShellstyle");

		$('.container').after(outerShell);
		$(outerShell).addClass("outerShellstyle");

		$(innerShell).append(pmLabel);
		$(innerShell).append(autoLabel);
		$(pmLabel).after(clockScreen);
		$(clockScreen).append(amPMlabel);
		$(autoLabel).after(amFreqlabel);
		$(autoLabel).after(fmFreqlabel);
		$(autoLabel).after(amFreqlabelNum);
		$(amFreqlabelNum).append(fmFreqlabelNum);  


		

	})  

	

