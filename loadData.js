var chrRaces, invFlags, invGroups, invTypes, charData, spinner;
var loadcounter = 5;

var loaded = function () {
    loadcounter--;
    console.log(loadcounter + " remaining");
    if (loadcounter <= 0) {
        startApp();
        spinner.stop();
    }
};

$(document).ready(function () {
    var opts = {
        lines: 13, // The number of lines to draw
        length: 20, // The length of each line
        width: 10, // The line thickness
        radius: 30, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#000', // #rgb or #rrggbb or array of colors
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: '50%', // Top position relative to parent
        left: '50%' // Left position relative to parent
    };
    var target = document.getElementById('spinner');
    spinner = new Spinner(opts).spin(target);

    $.getJSON("./data/invGroups.json", function (data) {
        invGroups = data;
        loaded();
    });
    $.getJSON("./data/invTypes.json", function (data) {
        invTypes = data;
        loaded();
    });
    $.getJSON("./data/invFlags.json", function (data) {
        invFlags = data;
        loaded();
    });
    $.getJSON("./data/chrRaces.json", function (data) {
        chrRaces = data;
        loaded();
    });
    $.getJSON("https://zkillboard.com/api/losses/characterID/268946627/", function (data) {
        charData = data;
        loaded();
    });

});
