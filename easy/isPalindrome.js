/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const strRev = x.toString().split('').reverse().join('');
    if (x === parseInt(strRev)) {
        console.log("true");
        return true;
    }
    console.log("false");
    return false;
};

var x = 121;

isPalindrome(x);
