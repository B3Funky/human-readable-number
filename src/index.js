module.exports = function toReadable(number) {

    const names = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        'hundred': 'hundred'
    };

    if (names[number]) {
        return names[number]
    }

    if (number > 20 && number < 100) {
        return tensToReadable(number)
    }

    if (number >= 100 && number < 1000) {
        let hundred = names[+number.toString()[0]] + ' ' + names['hundred'];
        if (!(number % 100)) {
            return hundred
        } else {
            let arr = number.toString().split('');
            if (+arr[1] === 0) {
                return hundred + ' ' + names[+arr[2]]
            } else {
                let str = '';
                let tens = +number.toString().slice(1);
                if (names[tens]) {
                    str = names[tens]
                } else {
                    str = tensToReadable(tens)
                }
                return hundred + ' ' + str
            }
        }
    }

    function tensToReadable(tens) {
        let str = '';
        let arr = tens.toString().split('');
        for (let i = 0; i < arr.length; i++) {
            if (!i) {
                str += names[+(arr[i] + '0')] + ' '
            } else {
                str += names[+arr[i]]
            }
        }
        return str
    }
};
