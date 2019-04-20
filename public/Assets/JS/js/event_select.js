function getEvents(){
    //  $('#attendees_table').empty();

    $('#events_list').empty();
    

    $.ajax({
        url: '/events',
        method: 'GET'
    }).then(function (event) {
       
            var headers = $('<tr>')

            var id_head= $('<th>')
            id_head.text("Event ID")
            headers.append(id_head);

            var title_head=$('<th>')
            title_head.text("Title")
            headers.append(title_head);

            var descript_head =$('<th>')
            descript_head.text("Description")
            headers.append(descript_head);

            var attendance_head=$('<th>')
            attendance_head.text("Capacity")
            headers.append(attendance_head);

            var date_head=$('<th>')
            date_head.text("Date of Event")
            headers.append(date_head);

            headers.attr('class','company_text_color')

            $('.events_list').append(headers);

    for (var eventIndex in event) {
            var c = $('<tr>');

            var e_id= $('<td>')
            e_id.text(`${event[eventIndex].id}`)
            c.append(e_id);
            
            var e_title= $('<td>')
            e_title.text(`${event[eventIndex].title}`)
            c.append(e_title);

            var e_descript=$('<td>')
            e_descript.text(`${event[eventIndex].descript}`)
            c.append(e_descript);

            var e_attend = $('<td>')
            e_attend.text(`${event[eventIndex].attendance}`)
            c.append(e_attend);

            var e_date =$('<td>')
            e_date.text( `${event[eventIndex].date}`)
            c.append(e_date)
            
            console.log(c)
        

            var bt = $('<button>');
            bt.attr('class', 'attendee_delete waves-effect company_color btn')

            bt.text('delete');
            bt.attr('data-id', event[eventIndex].id)
            // bt.attr('class', 'waves-effect company_color btn')
            c.append(bt);

           
            c.attr('class','company_text_color')
           
          
            $('.events_list').append(c)

            // var swag = $('<button>');
            // swag.attr('class', 'attendee_swag')

            // swag.text('Swag')
            // swag.attr(data - id, attendees[attendeesIndex].id)

            // p.append(swag)
    
        }
    })};
    