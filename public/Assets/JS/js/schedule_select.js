function getSchedule() {

    // $('#speaker')

    $.ajax({
        url: '/speakers',
        method: 'GET'
    }).then(function (speakers) {
        

            var headers = $('<tr>');

            var id_head= $('<th>')
            id_head.text("ID")
            headers.append(id_head);

            var name_head=$('<th>')
            name_head.text("Name")
            headers.append(name_head);

            var email_head =$('<th>')
            email_head.text("Topic")
            headers.append(email_head);

            var company_head=$('<th>')
            company_head.text("Title")
            headers.append(company_head);

            var picked_up_swag_head=$('<th>')
            picked_up_swag_head.text("Code")
            headers.append(picked_up_swag_head);


            $('#schedule_table').append(headers);


for (var speakersIndex in speakers) {
    var c = $('<tr>');

            var s_id= $('<td>')
            s_id.text(`${speakers[speakersIndex].id}`)
            c.append(s_id);
            
            var s_name= $('<td>')
            s_name.text(`${speakers[speakersIndex].name}`)
            c.append(s_name);

            var s_topic=$('<td>')
            s_topic.text(`${speakers[speakersIndex].topic}`)
            c.append(s_topic);

            var s_title = $('<td>')
            s_title.text(`${speakers[speakersIndex].title}`)
            c.append(s_title);


            var s_code =$('<td>')
            s_code.text(`${speakers[speakersIndex].code}`)
            c.append(s_code)
            // var a_swag =$('<td>')
            // var dropdown1 =`<label>
            // <input type="checkbox" data-name="swag" data-id="${attendees[attendeesIndex].id}"  ${ (attendees[attendeesIndex].picked_up_swag)?'checked="checked"':''}/>
            // <span>Yes</span></label>`
            // a_swag.text(`${attendees[attendeesIndex].picked_up_swag}`)
            // a_swag.html(dropdown1)
            // c.append(a_swag);

            // var a_lunch =$('<td>')
            // var dropdown2 =`<label>
            // <input type="checkbox" data-name="lunch" data-id="${attendees[attendeesIndex].id}" ${(attendees[attendeesIndex].picked_up_lunch)?'checked=checked"':''}/>
            // <span>Yes</span></label>`
            // a_lunch.text(`${attendees[attendeesIndex].picked_up_lunch}`)
            // a_lunch.html(dropdown2)
            // c.append(a_lunch)
        
    
            
            // var a_ts =$('<td>')
            // a_ts.text( `${attendees[attendeesIndex].ts}`)
            // c.append(a_ts)
            
            console.log(c)
             
            var bt = $('<button>');
            bt.attr('class', 'speaker_delete')

            bt.text('delete');
            bt.attr('data-id', speakers[speakersIndex].id)

            c.append(bt);

            $('#schedule_table').append(c)

}
        
})
};