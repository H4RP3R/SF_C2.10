const mainUrl = 'https://sf-pyw.mosyag.in/';
const catsVote = new URL('/sse/vote/cats', mainUrl);
const dogsVote = new URL('/sse/vote/dogs', mainUrl);
const parrotsVote = new URL('/sse/vote/parrots', mainUrl);


$(document).ready(function() {
    // + cats
    $('#cats-bttn').click(function() {
        $.post(catsVote, function(response) {
            // response received
            console.log(response.message);
            if (response.message === 'Ok') {
                $('#success-message').fadeIn(1200);
            } else {
                $('#allert-message').fadeIn(1200);
            }
            // no response received
        }).fail(function(response) {
            $('#allert-message').fadeIn(1200);
        });
        // disable and hide all buttons
        $('button').prop('disabled', true);
        $('#bttn-set').hide();
        // show the link
        $('.res-link').fadeIn(2800);
    });

    // + dogs
    $('#dogs-bttn').click(function() {
        $.post(dogsVote, function(response) {
            console.log(response.message);
            if (response.message === 'Ok') {
                $('#success-message').fadeIn(1200);
            } else {
                $('#allert-message').fadeIn(1200);
            }
        }).fail(function(response) {
            $('#allert-message').fadeIn(1200);
        });
        $('button').prop('disabled', true);
        $('#bttn-set').hide();
        $('.res-link').fadeIn(2800);
    });

    // + parrots
    $('#parrots-bttn').click(function() {
        $.post(parrotsVote, function(response) {
            console.log(response.message);
            if (response.message === 'Ok') {
                $('#success-message').fadeIn(1200);
            } else {
                $('#allert-message').fadeIn(1200);
            }
        }).fail(function(response) {
            $('#allert-message').fadeIn(1200);
        });
        $('button').prop('disabled', true);
        $('#bttn-set').hide();
        $('.res-link').fadeIn(2800);
    });
});
