/* global $ */
function sayThatWasEasy() {
    var thatWasEasy = new Audio("Running_in_the_90s.mp3");
    thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    if (event.keyCode == 32) {
        $("#easy").trigger("click");
    }}   