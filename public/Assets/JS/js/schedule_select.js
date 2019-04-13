function getSchedule(){

    $.ajax({
        url: '/speakers',
        method:'GET'
    }).then(function(speakers){
        for (var speakersIndex in speakers)
    
        var p = $('<p>');
    
        p.text(`id: ${speakers[speakersIndex].id},  name: ${speakers[speakersIndex].name}, topic: ${speakers[speakersIndex].topic}, title: ${speakers[speakersIndex].title}, code: ${speakers[speakersIndex].code},`)
        
        var bt = $('<button>');
        bt.attr('class', 'delete')
    
        bt.text('delete');
        bt.attr('data-id', attendees[attendeesIndex].id)
    
        p.append(bt);
    
        $('#schedule_table').prepend(p);
    })
    };