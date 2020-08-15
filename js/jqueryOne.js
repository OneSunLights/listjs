$(function(){
    $('#addCase').click(function(){
        if( $('.pusto').length )
            $('.left-list').first().html('<div class="list-item"><div class="list-head"><p>'+$('#nameCase').val()+'</p></div><p class="list-description">'+$('#description').val()+' </p></div>');
        else
            $('.left-list').first().prepend('<div class="list-item"><div class="list-head"><p>'+$('#nameCase').val()+'</p><a href="#" class="degger">X</a></div><p class="list-description">'+$('#description').val()+' </p></div>');
    
    });
    $('.degger').click(function(){
        $(this).remove();
        return false;
    });
    $('textarea').on('focus', function(){
        $(this).css('background','#5279e6');
    });
    $('textarea').on('blur', function(){
        $(this).css('background','white');
    });
    // $('.left-list').prepend('<div class="list-item"><div class="list-head"><p>'+$('#nameCase').val()+'</p><span class="degger"></span></div><p class="list-description">'+$('#description').val()+' </p></div>');
});
