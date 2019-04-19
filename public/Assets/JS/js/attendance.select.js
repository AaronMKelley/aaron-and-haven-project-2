function getAttendance(){
    //  $('#attendees_table').empty();

    $('#attendance_table').empty();
    

    $.ajax({
        url: '/check-in',
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

            $('#attendees_table').append(headers);

    for (var attendeesIndex in attendees) {
            var c = $('<tr>');

            var a_id= $('<td>')
            a_id.text(`${attendees[attendeesIndex].id}`)
            c.append(a_id);
            
            var a_name= $('<td>')
            a_name.text(`${attendees[attendeesIndex].name}`)
            c.append(a_name);

            var a_email=$('<td>')
            a_email.text(`${attendees[attendeesIndex].email}`)
            c.append(a_email);

            var a_company = $('<td>')
            a_company.text(`${attendees[attendeesIndex].company}`)
            c.append(a_company);

            var a_swag =$('<td>')
            var dropdown1 =`<label>
            <input type="checkbox" data-name="swag" data-id="${attendees[attendeesIndex].id}"  ${ (attendees[attendeesIndex].picked_up_swag)?'checked="checked"':''}/>
            <span>Yes</span></label>`
            a_swag.text(`${attendees[attendeesIndex].picked_up_swag}`)
            a_swag.html(dropdown1)
            c.append(a_swag);

            var a_lunch =$('<td>')
            var dropdown2 =`<label>
            <input type="checkbox" data-name="lunch" data-id="${attendees[attendeesIndex].id}" ${(attendees[attendeesIndex].picked_up_lunch)?'checked=checked"':''}/>
            <span>Yes</span></label>`
            a_lunch.text(`${attendees[attendeesIndex].picked_up_lunch}`)
            a_lunch.html(dropdown2)
            c.append(a_lunch)
        
    
            
            var a_ts =$('<td>')
            a_ts.text( `${attendees[attendeesIndex].ts}`)
            c.append(a_ts)
            
            console.log(c)
        

            var bt = $('<button>');
            bt.attr('class', 'attendee_delete')

            bt.text('delete');
            bt.attr('data-id', attendees[attendeesIndex].id)

            c.append(bt);

           

           
          
            $('#attendees_table').append(c)

            // var swag = $('<button>');
            // swag.attr('class', 'attendee_swag')

            // swag.text('Swag')
            // swag.attr(data - id, attendees[attendeesIndex].id)

            // p.append(swag)
    
        }
    })};