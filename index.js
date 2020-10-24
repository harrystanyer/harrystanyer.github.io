$(document).ready(function () {
    $("#getQuote").click(function () {
        getUselessFact();
    });
    $("#getHeight").click(function () {
        getHeight();
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

function getHeight() {
    var reg = new RegExp('^[0-9]+$');
    if (reg.test($("#h").val())) {
        $("#userHeight").html("Your height is: " + $("#h").val() + "cm");
    } else {
        $("#userHeight").html("Not Valid input");
    }

}