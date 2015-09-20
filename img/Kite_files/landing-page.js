$(document).ready(function () {
	
	$("#subscriptions").collapse('hide');
    $("#devices").collapse('hide');

	function subscribeAction(){

		$('#thanks-box').hide();

	    $('#mc-embedded-subscribe').click(function () {

	    if($('#errorBlock').text() !== "That email address is invalid" 
	        && $('#fieldEmail').val() !== ''){
	        
	        $('#subscribe-box').hide();
	        $('#thanks-box').fadeIn('slow');
	    }});
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