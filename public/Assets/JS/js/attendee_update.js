$(document).on('click', 'input[type="checkbox"]',(function(e) {

    //e.preventDefault(); 

	var whichone = $(this).attr('data-name')
	if (whichone =="swag"){
	$.ajax({
		url: '/swag-update/',
		method: 'PUT',
		data: {
			userid: $(this).attr("data-id"),
			checked : $(this).is(":checked")
		}
	}).then(function(message){
		console.log(message)
		
	});
}else {
	$.ajax({
		url: '/lunch-update/',
		method: 'PUT',
		data: {userid: $(this).attr("data-id"),
		checked : $(this).is(":checked")}
	}).then(function(message){
		console.log(message)
	});
	// console.log( $(this).is(":checked") )  
	// console.log( $(this).attr("data-id") )  
	console.log( $(this).is(":checked") )  
	console.log( $(this).attr("data-id") )  
	
}

}));

// $('#update_lunch').onClick(function(e) {

//     e.preventDefault(); // avoid to execute the actual submit of the form.

//     var ci = $( "#update_lunch input[name='attendees_id']" ).val();

//     var cn = $( "#update_lunch input[name='lunch_update']" ).val();

// 	$.ajax({
// 		// url: '/actors-update/' + ci + '?_method=PUT',
// 		url: '/lunch-update/' +ci,
// 		method: 'PUT',
// 		data: {lunch_update : cn}
// 	}).then(function(message){
// 		console.log(message)
// 		getAttendees();
// 	});

// });