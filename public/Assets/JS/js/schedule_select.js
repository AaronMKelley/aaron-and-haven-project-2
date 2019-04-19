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