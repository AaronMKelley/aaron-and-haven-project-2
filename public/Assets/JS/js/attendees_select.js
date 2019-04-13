function getAttendees() {
     $('#attendees_table').empty();
    $.ajax({
        url: '/attendees',
        method: 'GET'
    }).then(function (attendees) {
        for (var attendeesIndex in attendees) {



            var p = $('<p>');

            p.text(`${attendees[attendeesIndex].id}, ${attendees[attendeesIndex].name} ${attendees[attendeesIndex].email},
    ${attendees[attendeesIndex].company}, ${attendees[attendeesIndex].picked_up_swag}, 
    ${attendees[attendeesIndex].picked_up_lunch}, ${attendees[attendeesIndex].ts},`)

            var bt = $('<button>');
            bt.attr('class', 'attendee_delete')

            bt.text('delete');
            bt.attr('data-id', attendees[attendeesIndex].id)

            p.append(bt);

            $('#attendees_table').prepend(p);

            var swag = $('<button>');
            swag.attr('class', 'attendee_swag')

            swag.text('Swag')
            swag.attr(data - id, attendees[attendeesIndex].id)

            p.append(swag)
        

