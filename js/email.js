$(function(){
	$('.submit-btn').on('click', function(){
		var email = $('#inputEmail').val();
		if( email != '' ){
			$('.enter-email').addClass('fadeOut');
			$('.thank-you').addClass('fadeInUp');
			ga('send', 'event', 'email-subscription', 'click', email, { 'email': email });
		}
	});
});