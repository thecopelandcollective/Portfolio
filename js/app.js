$(document).foundation()

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html, body').animate({
		  scrollTop: target.offset().top
		}, 1000);
		return false;
	  }
	}
  });
});

//form submission using AJAX
$(function() {
	// Get the form.
	var form = $('#contact');
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function() {
		// Stop the browser from submitting the form.
		//event.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();
		// Submit the form using AJAX.
		$.ajax({
		    type: 'POST',
		    url: $(form).attr('action'),
		    data: formData
		})
		.done(function(response) {
	    // Make sure that the formMessages div has the 'success' class.
	    // $(formMessages).removeClass('error');
	    $(formMessages).addClass('callout primary');

	    // // Set the message text.
	    $(formMessages).text('You have made a wise decision, you should be congratulated! I will get back to you as fast as humanly possible. thank you.');

	    // Clear the form.
		    $('#name').val('');
		    $('#email').val('');
		    $('#company').val('');
		    $('#time').val('');
		    $('#details').val('');
		})
	});
});
