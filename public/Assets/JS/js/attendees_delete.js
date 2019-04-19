$(document).on('click', '.attendee_delete', function(e) {

    // e.preventDefault(); // avoid to execute the actual submit of the form.
    
	$.ajax({
		url: '/attendee-delete',
		method:'DELETE',
		data: {attendees_id : $(this).attr('data-id')}
	}).then(function(message){
		getAttendees();
	});

	$(this).parent().remove();
});