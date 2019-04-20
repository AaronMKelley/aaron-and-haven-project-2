function getAttendance(){
    //  $('#attendees_table').empty();

    $('#attendance_table').empty();
    

    $.ajax({
        url: '/attendance',
        method: 'GET'
    }).then(function (attendees) {
       
            var headers = $('<tr>')

            var sp_head= $('<th>')
            sp_head.text("Speaker")
            headers.append(sp_head);

            var name_head=$('<th>')
            name_head.text("Name")
            headers.append(name_head);

            var email_head =$('<th>')
            email_head.text("Email")
            headers.append(email_head);

            var company_head=$('<th>')
            company_head.text("Company")
            headers.append(company_head);

            var picked_up_swag_head=$('<th>')
            picked_up_swag_head.text("Picked Up Swag")
            headers.append(picked_up_swag_head);

            var picked_up_lunch_head=$('<th>')
            picked_up_lunch_head.text("Picked Up Lunch")
            headers.append(picked_up_lunch_head);

            var timestamp_head=$('<th>')
            timestamp_head.text("Timestamp")
            headers.append(timestamp_head);

            $('#attendance_table').append(headers);

    for (var attendanceIndex in attendance) {
            var c = $('<tr>');

            var attendee_id= $('<td>')
            a_id.text(`${attendance[attendanceIndex].attendee_id}`)
            c.append(attendee_id);
            
            var speaker_id= $('<td>')
            a_name.text(`${attendance[attedanceIndex].speaker_id}`)
            c.append(speaker_id);

            console.log(c)
        

            var bt = $('<button>');
            bt.attr('class', 'attendee_delete')

            bt.text('delete');
            bt.attr('data-id', attendees[attendeesIndex].id)

            c.append(bt);

           

           
          
            $('#attendance_table').append(c)

            // var swag = $('<button>');
            // swag.attr('class', 'attendee_swag')

            // swag.text('Swag')
            // swag.attr(data - id, attendees[attendeesIndex].id)

            // p.append(swag)
    
        }
    })};