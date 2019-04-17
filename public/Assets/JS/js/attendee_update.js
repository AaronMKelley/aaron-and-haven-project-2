$('#update_swag').submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var ci = $( "#update_swag input[name='attendees_id']" ).val();

    var cn = $( "#update_swag input[name='swag_update']" ).val();

	$.ajax({
		// url: '/actors-update/' + ci + '?_method=PUT',
		url: '/swag-update/' +ci,
		method: 'PUT',
		data: {swag_update : cn}
	}).then(function(message){
		console.log(message)
		getAttendees();
	});	

});

$('#update_lunch').submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var ci = $( "#update_lunch input[name='attendees_id']" ).val();

    var cn = $( "#update_lunch input[name='lunch_update']" ).val();

	$.ajax({
		// url: '/actors-update/' + ci + '?_method=PUT',
		url: '/lunch-update/' +ci,
		method: 'PUT',
		data: {lunch_update : cn}
	}).then(function(message){
		console.log(message)
		getAttendees();
	});

});