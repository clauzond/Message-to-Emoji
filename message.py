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

def create_letter_dic():
    letter_dic = {}

    # a to z
    for i in range(ord("a"), ord("z")+1):
        letter_dic[chr(i)] = [f":regional_indicator_{chr(i)}:"]

    # special a to z
    letter_dic["a"] += [":a:"]
    letter_dic["b"] += [":b:"]
    letter_dic["i"] += [":information_source:"]
    letter_dic["m"] += [":m:"]
    letter_dic["o"] += [":o:", ":o2:"]
    letter_dic["p"] += [":parking:"]
    letter_dic["x"] += [":x:"]

    # 0 to 9
    numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for i in range(0, 10):
        letter_dic[str(i)] = [f":{numbers[i]}:"]

    # punctuation
    letter_dic["!"] = [":exclamation:", ":exclaim:", ":grey_exclamation:"] 
    letter_dic["?"] = [":question:", ":grey_question:"] 
    letter_dic["#"] = [":hash:"]
    letter_dic["*"] = [":asterisk:"]
    letter_dic["+"] = [":heavy_plus_sign:"]
    letter_dic["-"] = [":heavy_minus_sign:"]
    letter_dic["$"] = [":heavy_dollar_sign:"]
    letter_dic[" "] = ["   "]

    return letter_dic

def choice(letter_list):
    if letter_list[0] == "":
        return ""
    else:
        return(random.choice(letter_list) + " ")

def message_to_emote(message: str):
    res = ""
    for letter in strip_accents(message):
        try:
            res += choice(LETTER_DIC[letter])
        except:
            pass
    return res

def menu():
    try:
        clear()
        print("Enter your message (I will convert it to emotes in your paperclip 🥵")
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

LETTER_DIC = create_letter_dic()

if __name__ == "__main__":
    try:
        menu()
    except:
        pass