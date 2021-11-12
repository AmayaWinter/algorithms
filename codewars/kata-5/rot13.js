function rot13(message) {
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    

    return message.split('').map((char, i) => {
        let isUpperCase = char === char.toUpperCase();
        char = char.toLowerCase();
        if(char.match(/[a-z]/)) {;
            let charIdx = letters.indexOf(char);
            char = letters[charIdx + (charIdx < 13 ? 13 : -13)];
        }
        return isUpperCase? char.toUpperCase() : char;
    }).join('');
}

console.log(rot13('abcdefghijklmnopqrstuvwxyz ,'));

