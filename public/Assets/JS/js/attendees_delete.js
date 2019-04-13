$(document).on('click', '.attendee_delete', function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.
    
	$.ajax({
		url: '/attendee-delete?_method=DELETE',
		data: {speakers_id : $(this).attr('data-id')}
	}).then(function(message){
		getAttendees();
	});

});