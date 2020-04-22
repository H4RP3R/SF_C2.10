const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})


const mainUrl = 'https://sf-pyw.mosyag.in/';
const statsUrl = new URL('/sse/vote/stats', mainUrl);

const ES = new EventSource(statsUrl, header);


$(document).ready(function() {
    ES.onmessage = event => {
        const message = JSON.parse(event.data);
        const totalVotes = message['cats'] + message['dogs'] + message['parrots'];

        $('h1').fadeIn(50);
        $('#rov-1').fadeIn(200);
        $('#rov-2').fadeIn(600);
        $('#rov-3').fadeIn(1000);

        // cats
        $('#cats-num').text(message['cats']);
        // calculate the percentage of votes
        let num = Math.round(message['cats'] * 100 / totalVotes);
        // display results
        $('#cats-percent').text(`${num}%`)
        $('#cats-progress').css('width', `${num}%`);

        // dogs
        $('#dogs-num').text(message['dogs']);
        num = Math.round(message['dogs'] * 100 / totalVotes);
        $('#dogs-percent').text(`${num}%`)
        $('#dogs-progress').css('width', `${num}%`);

        // parrots
        $('#parrots-num').text(message['parrots']);
        num = Math.round(message['parrots'] * 100 / totalVotes);
        $('#parrots-percent').text(`${num}%`)
        $('#parrots-progress').css('width', `${num}%`);
    }

    ES.onerror = error => {
        ES.readyState ? console.error("ERROR: ", error) : null;
    };

});
