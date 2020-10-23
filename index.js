$(document).ready(function () {
    $("#button1").click(function () {
        getUselessFact();
    });
});

function firstWord(paragraph) {
    var a = paragraph.Split(' ');
}

function getUselessFact() {
    fetch('https://uselessfacts.jsph.pl/random.json')
        .then((resp) => resp.json())
        .then(function (data) {
            $("#uselessFactTarget").html(data.text);
        })
        .catch(function () {
            console.log('Not working');
        });
}