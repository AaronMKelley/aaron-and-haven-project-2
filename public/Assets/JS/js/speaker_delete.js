$(document).on('click', '.speaker_delete', function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.
    
	$.ajax({
		url: '/speaker-delete',
		method: 'DELETE',
		data: {speakers_id : $(this).attr('data-id')}
	}).then(function(message){
		res.redirect('/')
		getSchedule();
	});

});