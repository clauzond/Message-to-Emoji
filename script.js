import { message_to_emote_patterns } from "./message.js";

const alert_timeout = 1000;

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function copy_to_clipboard() {
    bool = not_an_easter_egg(document.getElementById("text-to-convert").value);
    if (bool) {
        show_alert(`Message converted to emotes ${random_emoji()}`);
    }
    navigator.clipboard.writeText(message_to_emote_patterns(document.getElementById("text-to-convert").value));
}

function random_emoji() {
    var [min, max] = [128513, 128590];
    return `&#${randint(min, max)};`;
}

function not_an_easter_egg(message) {
    if (message.toLowerCase().includes("ujkpgs")) {
        setTimeout(() => {window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank')}, 2000);
    }
    if (message.strip_accents().includes("zahx") && !message.includes("ZahX")) {
        show_other_alert("Ca s'écrit <b><span style='font-size:200%'>Z</span>ah<span style='font-size:200%'>X</span></b> connard");
        setTimeout(() => {window.open("https://www.youtube.com/watch?v=ZW_WwHeHHZ0", '_blank')}, 6000);
        return false;
    }
    if (message.strip_accents().includes("shrek")) {
        show_other_alert("⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n        ⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n        ⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀\n        ⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀\n        ⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆\n        ⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿\n        ⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀\n        ⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀\n        ⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀\n        ⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀\n        ⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀\n        ⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀\n        ⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀\n");
        $('#other-alert').animate({ backgroundColor: "#80F080" }, 500);
        return false;
    }
    if (message.strip_accents().includes("diablo")) {
        document.getElementById("other-alert").style.backgroundColor = "#e68792";
        show_other_alert("Diablo... ?");
        $("#other-alert").effect("explode");
        return false;
    }
    if (message.strip_accents().includes("shake")) {
        $("body").effect("shake");
    }
    return true;
}

function show_alert(message) {
    document.getElementById("copy-alert").innerHTML = message;
    $('#copy-alert').fadeIn("easing");
    setTimeout(() => { $('#copy-alert').fadeOut("easing") }, alert_timeout);
}

function show_other_alert(message) {
    document.getElementById("other-alert").innerHTML = message;
    $('#other-alert').fadeIn("easing");
    setTimeout(() => { $('#other-alert').fadeOut("easing") }, alert_timeout);
    setTimeout(() => { document.getElementById("other-alert").style.backgroundColor = "" }, alert_timeout + 300);
}