const letter_dict = {};
const alert_timeout = 1000;

Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}

String.prototype.strip_accents = function () {
    return this.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function create_letter_dict() {
    // a to z
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (const letter of alphabet) {
        letter_dict[letter] = [`:regional_indicator_${letter}:`];
    }

    // special a to z
    letter_dict["a"].push(...[":a:"]);
    letter_dict["b"].push(...[":b:"]);
    letter_dict["i"].push(...[":information_source:"]);
    letter_dict["m"].push(...[":m:", ":scorpius:"]);
    letter_dict["o"].push(...[":o:", ":o2:"]);
    letter_dict["p"].push(...[":parking:"]);
    letter_dict["x"].push(...[":x:", ":negative_squared_cross_mark:"]);

    // 0 to 9
    numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (var i = 0; i < 10; i++) {
        letter_dict[String(i)] = [`:${numbers[i]}:`];
    }

    // punctuation
    letter_dict["!"] = [":exclamation:", ":grey_exclamation:"];
    letter_dict["?"] = [":question:", ":grey_question:"];
    letter_dict["#"] = [":hash:"];
    letter_dict["*"] = [":asterisk:"];
    letter_dict["+"] = [":heavy_plus_sign:"];
    letter_dict["-"] = [":heavy_minus_sign:"];
    letter_dict["$"] = [":heavy_dollar_sign:"];
    letter_dict[" "] = ["   "];

    return letter_dict;
}

function message_to_emote(message) {
    var res = "";
    var emoji;
    for (const letter of message.strip_accents()) {
        emoji = letter_dict[letter];
        if (emoji) {
            if (letter == " ") {
                res += letter_dict[letter][0];
            } else {
                res += letter_dict[letter].sample() + " ";
            }
        }
        else {
            res += letter + " ";
        }
    }
    return res;
}

function random_emoji() {
    var [min, max] = [128513, 128590];
    return `&#${randint(min, max)};`;
}

function not_an_easter_egg(message) {
    if (message.toLowerCase().includes("ujkpgs")) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
    }
    if (message.strip_accents().includes("zahx") && !message.includes("ZahX")) {
        show_other_alert("Ca s'écrit <b><span style='font-size:200%'>Z</span>ah<span style='font-size:200%'>X</span></b> connard");
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

function copy_to_clipboard() {
    bool = not_an_easter_egg(document.getElementById("text-to-convert").value);
    if (bool) {
        show_alert(`Message converted to emotes ${random_emoji()}`);
    }
    navigator.clipboard.writeText(message_to_emote(document.getElementById("text-to-convert").value));
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
    setTimeout(() => {document.getElementById("other-alert").style.backgroundColor = ""}, alert_timeout + 300);
}

function hide_alert() {
    $('#copy-alert').hide();
}

create_letter_dict();
document.getElementById("submit-button").onclick = copy_to_clipboard;