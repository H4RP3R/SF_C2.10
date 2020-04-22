const mainUrl = 'https://sf-pyw.mosyag.in/';
const catsVote = new URL('/sse/vote/cats', mainUrl);
const dogsVote = new URL('/sse/vote/dogs', mainUrl);
const parrotsVote = new URL('/sse/vote/parrots', mainUrl);


$(document).ready(function() {
    // + cats
    $('#cats-bttn').click(function() {
        $.post(catsVote, function(response) {
            // log response status
            console.log(response);
        });
        // disable and hide all buttons
        $('button').prop('disabled', true);
        $('#bttn-set').hide();
        // show the message and link
        $('#allert-message').fadeIn(1200);
        $('.res-link').fadeIn(2800);
    });

    // + dogs
    $('#dogs-bttn').click(function() {
        $.post(dogsVote, function(response) {
            console.log(response);
        });
        $('button').prop('disabled', true);
        $('#bttn-set').hide();
        $('#allert-message').fadeIn(1200);
        $('.res-link').fadeIn(2400);
    });

    // + parrots
    $('#parrots-bttn').click(function() {
        $.post(parrotsVote, function(response) {
            console.log(response);
        });
        $('button').prop('disabled', true);
        $('#bttn-set').hide();
        $('#allert-message').fadeIn(1200);
        $('.res-link').fadeIn(2400);
    });
});
