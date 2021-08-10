const letter_dict = {};

Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}

String.prototype.strip_accents = function () {
    return this.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
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
    letter_dict[" "] = ["  "];

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

create_letter_dict();