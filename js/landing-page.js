$(document).ready(function () {
	
	$("#subscriptions").collapse('hide');
    $("#devices").collapse('hide');
    $("#subscribe-box").hide();
    $("#apply-thanks").hide();

    function loadPartialViews(){

    	$('#testimonials').load("testimonials.html");
    }

	function subscribeAction(){

		$('#thanks-box').hide();

	    $('#mc-embedded-subscribe').click(function () {

	    if($('#errorBlock').text() !== "That email address is invalid" 
	        && $('#fieldEmail').val() !== ''){
	        
	        $('#subscribe-box').hide();
	        $('#thanks-box').fadeIn('slow');
	    }});

	   	$('#subscribe-news').click(function () {
	   		//cambiare l'url del post della form con la lista newsletter
	   		var name="cm-jjttz-jjttz";
	   		$('#fieldEmail').attr('name', name);
	   		$('#subForm').attr('action', 'http://kit4.createsend.com/t/i/s/jjttz/');
	   		$('#button-subscribe').hide()
	   		$('#subscribe-box').fadeIn('slow');

	   	});

		$('#subscribe-beta').click(function () {
	   		//cambiare l'url del post della form con la lista beta tester
	   		var name="cm-juiykj-juiykj";
	   		$('#fieldEmail').attr('name', name);
	   		$('#subForm').attr('action', 'http://kit4.createsend.com/t/i/s/juiykj/');
   		   	$('#button-subscribe').hide()
	   		$('#subscribe-box').fadeIn('slow');
	   	});

	   	$('#apply_now').click(function () {
	   		//cambiare l'url del post della form con la lista beta tester
	   		var name="cm-tdxiu-tdxiu";
	   		$('#fieldEmail').attr('name', name);
	   		$('#form_apply').attr('action', 'http://kit4.createsend.com/t/i/s/tdxiu/');
   		   	$('#apply-section').hide()
	   		$('#apply-thanks').fadeIn('slow');
	   	});




	}

	function buyActioin(){
		
		$('#buy-mex').hide();

		$('#btn-premium').click(function () {

			$('#subscribe-mex').hide();
	        $('#buy-mex').fadeIn('slow');
		});

		$('#btn-free').click(function () {

			$('#subscribe-mex').hide();
	        $('#buy-mex').fadeIn('slow');
		});

	}

	subscribeAction();
	buyActioin();

	$('.post').viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100   
	});  

});