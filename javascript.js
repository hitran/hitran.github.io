/**
 * Created by tranthuchi on 5/27/18.
 */
$(document).ready(function() {
    $('.burger-button').click(function() {
        $('.burger-button').toggleClass('close');
        $('nav').toggleClass('open');
    });
});