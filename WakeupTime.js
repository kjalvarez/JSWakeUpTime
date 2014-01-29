$(document).on('ready', function() {
	var innerShell = $('<div>I am the inner shell</div>');
	var outerShell = $('<div>I am the outer shell</div>');
	

		$('.container').append(innerShell);
		$(innerShell).addClass("innerShellstyle");

		$('.container').after(outerShell);
		$(outerShell).addClass("outerShellstyle");

		

	})  

	

