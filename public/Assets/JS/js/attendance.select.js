function getAttendance(){


    $('#attendance_table').empty();
    

    $.ajax({
        url: '/attendance',
        method: 'GET'
    }).then(function (attendance) {
       
            var headers = $('<tr>')
            
            var sp_id=$('<th>')
            sp_id.text("Speaker ID")
            headers.append(sp_id);

            var a_id= $('<th>')
            a_id.text("Attendee ID")
            headers.append(a_id);

           
            $('#attendance_table').append(headers);

    for (var attendanceIndex in attendance) {
            var c = $('<tr>');

            var speaker_id= $('<td>')
            speaker_id.text(`${attendance[attendanceIndex].speaker_id}`)
            c.append(speaker_id);

            var attendee_id= $('<td>')
            attendee_id.text(`${attendance[attendanceIndex].attendee_id}`)
            c.append(attendee_id);
            

            var d =$('<tr>');

          

            console.log(c)
        

            // var bt = $('<button>');
            // bt.attr('class', 'attendee_delete')

            // bt.text('delete');
            // bt.attr('data-id', attendees[attendeesIndex].id)

            // c.append(bt);

           

           
          
            $('#attendance_table').append(c)

            // var swag = $('<button>');
            // swag.attr('class', 'attendee_swag')

            // swag.text('Swag')
            // swag.attr(data - id, attendees[attendeesIndex].id)

            // p.append(swag)
    
        }
    })};