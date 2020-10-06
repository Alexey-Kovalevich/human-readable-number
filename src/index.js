module.exports = function toReadable (number) {
    let num = String(number);

    let first ={
        '0': 'zero',
        '1': 'one', 
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
    };

    let second = {
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
    };

    if (num <= 19) {
        return first[num];
    }

    if (num.length === 2 && num[1] === '0') {
        return second[num];
    } else if (num.length === 2) {
        return `${second[num[0] + '0']} ${first[num[1]]}`;
    }

    if (num.length === 3 && num[1] === '0' && num[2] === '0') {
        return `${first[num[0]]} hundred`;

    } else if (num.length === 3 && num[2] === '0') {

        if (num[1] === '1') {
            return `${first[num[0]]} hundred ${first[num[1] + '0']}`;

        } else {
            return `${first[num[0]]} hundred ${second[num[1] + '0']}`;
        }

    } else if (num.length === 3 && num[1] === '0') {
        return `${first[num[0]]} hundred ${first[num[2]]}`;

    } else if ((num[1] + num[2]) >= 10 && num[1] + num[2] <= 19) {
        return `${first[num[0]]} hundred ${first[num[1] + num[2]]}`;
        
    } else {
        return `${first[num[0]]} hundred ${second[num[1] + '0']} ${first[num[2]]}`;
    }
}