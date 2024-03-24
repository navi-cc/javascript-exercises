const fibonacci = function(n) {
    
    let a;

    if (typeof n !== "number") n = parseInt(n); 
    if (n < 0) return 'OOPS';
    if (n === 0) return 0;

    let arr = [1];

    let previousIndex = 0;
    for (let i = 0; i < n; i++) {

        if (i === 0) {
        a = arr[i] + i;
        arr.push(a);
        continue;
        }  
        
        a = arr[i] + arr[previousIndex]
        previousIndex++
        arr.push(a);
    }

    return arr[arr.length - 2];
};


// Do not edit below this line
module.exports = fibonacci;
