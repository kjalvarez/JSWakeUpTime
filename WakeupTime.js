$(document).on('ready', function() {
	var innerShell = $('<div>I am the inner shell</div>');
	var outerShell = $('<div>I am the outer shell</div>');
	var pmLabel = $('<div class= "labelStyle">PM</div>');
	var autoLabel = $('<div class= "labelStyleAuto">AUTO</div>');
	var clockScreen = $('<div class= "labelStyleScreen">12:00</div>');
	var amPMlabel = $('<div class="dotStyle">DOT</div>');

		$('.container').append(innerShell);
		$(innerShell).addClass("innerShellstyle");

		$('.container').after(outerShell);
		$(outerShell).addClass("outerShellstyle");

		$(innerShell).append(pmLabel);
		$(innerShell).append(autoLabel);
		$(pmLabel).after(clockScreen);
		$(autoLabel).after(amPMlabel);


		

	})  

	

