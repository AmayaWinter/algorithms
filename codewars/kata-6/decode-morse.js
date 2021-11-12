/**
 * @param {string} morseCode
 */
var MORSE_CODE = {'-.-.--': '!','.-..-.': '"','...-..-': '$','.-...': '&','.----.': '\'','-.--.': '(','-.--.-': ')','.-.-.': '+','--..--': ',','-....-': '-','.-.-.-': '.','-..-.': '/','-----': '0','.----': '1','..---': '2','...--': '3','....-': '4','.....': '5','-....': '6','--...': '7','---..': '8','----.': '9','---...': ':','-.-.-.': ';','-...-': '=','..--..': '?','.--.-.': '@','.-': 'A','-...': 'B','-.-.': 'C','-..': 'D','.': 'E','..-.': 'F','--.': 'G','....': 'H','..': 'I','.---': 'J','-.-': 'K','.-..': 'L','--': 'M','-.': 'N','---': 'O','.--.': 'P','--.-': 'Q','.-.': 'R','...': 'S','-': 'T','..-': 'U','...-': 'V','.--': 'W','-..-': 'X','-.--': 'Y','--..': 'Z','..--.-': '_','...---...': 'SOS' };

    //your code here
    //single space - character spacing
    //three spaces - word spacing
    //extra spaces before or after should be ignored

decodeMorse = function(morseCode){

    if(MORSE_CODE[morseCode]) { //check to see if this is a special word
        return MORSE_CODE[morseCode];
    }
    return morseCode.trim().split('   ').map(word => {
            return (word.split(' ').map(letter => MORSE_CODE[letter]).join(''));
    }).join(' ').trim();
}

console.log( decodeMorse('.   .'));