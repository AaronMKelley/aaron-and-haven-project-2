function getAttendees(){

$.ajax({
    url: '/attendees',
    method:'GET'
}).then(function(attendees){
    for (var attendeesIndex in attendees)

    var tr = $('<tr>');
    var th
    tr.text(`${attendees[attendeesIndex].id}, ${attendees[attendeesIndex].name} ${attendees[attendeesIndex].email},
    ${attendees[attendeesIndex].company}, ${attendees[attendeesIndex].picked_up_swag}, 
    ${attendees[attendeesIndex].picked_up_lunch}, ${attendees[attendeesIndex].ts},`)

    var bt = $('<button>');
    bt.attr('class', 'delete')

    bt.text('delete');
    bt.attr('data-id', attendees[attendeesIndex].id)

    p.append(bt);

    $('#attendees_table').prepend(p);
})
};