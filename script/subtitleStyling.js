function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const subtitle = document.querySelector('#subtitle');

function on() {
    subtitle.innerText = "Unofficial Life_";
}

function off() {
    subtitle.innerText = "Unofficial Life" + '\xa0';
}

function updateSubtitleStyling() {
    on();
    sleep(1000).then(off);
}

setInterval(function() {
    updateSubtitleStyling();
    return arguments.callee;
}(), 2000);