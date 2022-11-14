const fact = require('./fact');
let pow = (x,n)=>{
    let result = 1;
    for(let i = 0;i < n;i++){
        result *= x;
    }
    return result;
}

module.exports = {pow:pow,fact:fact};