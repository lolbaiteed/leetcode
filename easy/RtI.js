/**
 * @param {string} s
 * @return {number}
 */

var val = function(s) {
    switch (s) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return 0;
        };
}

var romanToInt = function(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const s1 = val(s[i]);
        if (i+1 < s.length) {
            let s2 = val(s[i+1]);
            if (s1 >= s2) {
                sum += s1;
                console.log(sum);
            } else {
                sum += (s2 - s1);
                i++;
            }
        } else {
            sum += s1;
            console.log(sum);
        }
    }
    return sum;
};

s = "XV";

romanToInt(s);
