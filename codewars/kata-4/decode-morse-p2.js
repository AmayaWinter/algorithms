var MORSE_CODE = {'-.-.--': '!','.-..-.': '"','...-..-': '$','.-...': '&','.----.': '\'','-.--.': '(','-.--.-': ')','.-.-.': '+','--..--': ',','-....-': '-','.-.-.-': '.','-..-.': '/','-----': '0','.----': '1','..---': '2','...--': '3','....-': '4','.....': '5','-....': '6','--...': '7','---..': '8','----.': '9','---...': ':','-.-.-.': ';','-...-': '=','..--..': '?','.--.-.': '@','.-': 'A','-...': 'B','-.-.': 'C','-..': 'D','.': 'E','..-.': 'F','--.': 'G','....': 'H','..': 'I','.---': 'J','-.-': 'K','.-..': 'L','--': 'M','-.': 'N','---': 'O','.--.': 'P','--.-': 'Q','.-.': 'R','...': 'S','-': 'T','..-': 'U','...-': 'V','.--': 'W','-..-': 'X','-.--': 'Y','--..': 'Z','..--.-': '_','...---...': 'SOS' };

var decodeBits = function(bits){

    bits = bits.replace(/^0+/, '').replace(/0+$/, ''); //remove leading and trailing 0's
    function getShortestFrom(arr) {
        let temp = arr.filter(elem => {
            return elem.length > 0;
        }).sort((a,b) => {
            return a.length - b.length;
        })[0];
        return temp;
    }

    let timeInterval = [bits.split('0'), bits.split('1')].map(getShortestFrom).sort((a,b) => a.length - b.length)[0].length;
    let dots = new RegExp( '1'.repeat(timeInterval), 'g');
    let dashes = new RegExp( '1'.repeat(timeInterval*3), 'g');
    let dotDashPause = new RegExp( '0'.repeat(timeInterval), 'g');
    let charPause = new RegExp( '0'.repeat(timeInterval*3), 'g');
    let wordPause = new RegExp( '0'.repeat(timeInterval*7), 'g');
    return bits.replace(wordPause, '   ').replace(charPause, ' ').replace(dashes, '-').replace(dots, '.').replace(dotDashPause, '');
}

var decodeMorse = function(morseCode){
    if(MORSE_CODE[morseCode]) { //check to see if this is a special word
        return MORSE_CODE[morseCode];
    }
    return morseCode.trim().split('   ').map(word => {
            return (word.split(' ').map(letter => MORSE_CODE[letter]).join(''));
    }).join(' ').trim();
}

//previous way of determining time interval
    // let timeInterval;
    // let timeIntervalOnes = bits.split('0').filter(elem => !!elem); //split into array by 0's, filter out the empty values where 0 was, sort the arr and take the first value which is the shortest and basic time interval
    // if(timeIntervalOnes.length > 0) {
    //     timeIntervalOnes = timeIntervalOnes.sort()[0].length;
    //     if(timeIntervalOnes !== 0) {
    //         timeInterval = timeIntervalOnes;
    //     }

    // }

    // let timeIntervalZeroes = bits.split('1').filter(elem => !!elem)
    // if(timeIntervalZeroes.length > 0) {
    //     timeIntervalZeroes = timeIntervalZeroes.sort()[0].length;
    //     if(timeIntervalZeroes !== 0 && timeIntervalZeroes < timeIntervalOnes)
    //     {
    //         timeInterval = timeIntervalZeroes;
    //     }
    // }


// var decodeMorse = function(morseCode){
//     // ToDo: Accept dots, dashes and spaces, return human-readable message
//     return morseCode.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '');
// }
// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
// console.log(decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')));
// console.log('t'.match('a'));
 console.log(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'));
// console.log(decodeBits('1110111')); //--
// console.log(decodeBits('10001')); //.   .  EE
// console.log(decodeMorse(decodeBits('1')));
// console.log(decodeMorse(decodeBits('11111111111111100000000000000011111000001111100000111110000011111000000000000000111110000000000000000000000000000000000011111111111111100000111111111111111000001111100000111111111111111000000000000000111110000011111000001111111111111110000000000000001111100000111110000000000000001111111111111110000011111000001111111111111110000011111000000000000000111111111111111000001111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000111110000000000000001111100000111111111111111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111111111111111000001111111111111110000000000000001111111111111110000011111000000000000000000000000000000000001111100000111110000011111111111111100000111110000000000000001111111111111110000011111111111111100000111111111111111000000000000000111111111111111000001111100000111110000011111111111111100000000000000000000000000000000000111110000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111111111111100000000000000011111111111111100000111111111111111000000000000000111110000011111111111111100000111111111111111000001111100000000000000011111000001111100000111110000000000000000000000000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111000001111111111111110000000000000001111100000000000000011111000001111111111111110000011111000000000000000000000000000000000001111111111111110000000000000001111100000111110000011111000001111100000000000000011111000000000000000000000000000000000001111100000111111111111111000001111100000111110000000000000001111100000111111111111111000000000000000111111111111111000001111111111111110000011111000001111100000000000000011111111111111100000111110000011111111111111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111111111111110000011111111111111100000111110000000000000001111100000111111111111111000001111100000111111111111111000001111100000111111111111111')));



