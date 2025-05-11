/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let top = -1;
    for (let i = 0; i < s.length; i++) {
       if(s[i]=='(' || s[i]=='{' || s[i] == '[') {
            stack[++top] = s[i];
       } else {
            if(top == -1 || (s[i] == ')'&&stack[top] != '(') || (s[i] == '}'&&stack[top] != '{') || (s[i] == ']'&&stack[top] != '['))
               return false;
               top--;
        }
    }
    return top === -1;
};

let s = "[]";

isValid(s);
