import random
import os, platform
import time
import unicodedata
import pyperclip

def strip_accents(s):
   return ''.join(c.lower() for c in unicodedata.normalize('NFD', s)
                  if unicodedata.category(c) != 'Mn')

def clear():
    if platform.system() == "Windows":
        return os.system('cls')
    else:
        return os.system('clear')

def create_letter_dict():
    letter_dict = {}

    # a to z
    for i in range(ord("a"), ord("z")+1):
        letter_dict[chr(i)] = [f":regional_indicator_{chr(i)}:"]

    # special a to z
    letter_dict["a"] += [":a:"]
    letter_dict["b"] += [":b:"]
    letter_dict["i"] += [":information_source:"]
    letter_dict["m"] += [":m:", ":scorpius:"]
    letter_dict["o"] += [":o:", ":o2:"]
    letter_dict["p"] += [":parking:"]
    letter_dict["x"] += [":x:", ":negative_squared_cross_mark:"]

    # 0 to 9
    numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for i in range(0, 10):
        letter_dict[str(i)] = [f":{numbers[i]}:"]

    # punctuation
    letter_dict["!"] = [":exclamation:", ":grey_exclamation:"] 
    letter_dict["?"] = [":question:", ":grey_question:"] 
    letter_dict["#"] = [":hash:"]
    letter_dict["*"] = [":asterisk:"]
    letter_dict["+"] = [":heavy_plus_sign:"]
    letter_dict["-"] = [":heavy_minus_sign:"]
    letter_dict["$"] = [":heavy_dollar_sign:"]
    letter_dict[" "] = ["  "]

    return letter_dict

def message_to_emote(message: str):
    res = ""
    for letter in strip_accents(message):
        try:
            if letter == " ":
                res += LETTER_DICT[letter][0]
            else:
                res += random.choice(LETTER_DICT[letter]) + " "
        except:
            res += letter + " "
    return res

def menu():
    try:
        clear()
        print("Enter your message (I will convert it to emotes in your paperclip 🥵)")
        message = strip_accents(str(input("> ")))
        pyperclip.copy(message_to_emote(message))
        for i in range(0, 4):
            clear()
            print(message)
            print("Copied"+i*".")
            time.sleep(0.5)
        menu()
    except:
        return

LETTER_DICT = create_letter_dict()

if __name__ == "__main__":
    try:
        menu()
    except:
        pass