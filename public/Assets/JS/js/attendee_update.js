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

	console.log( $(this).is(":checked") )  
	console.log( $(this).attr("data-id") )  
}

}));



