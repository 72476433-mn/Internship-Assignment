function sumOfProducts(n1, n2) {
    // Convert numbers to strings
    let str1 = n1.toString();
    let str2 = n2.toString();

    // Make sure the length of str1 is equal to or greater than str2 to avoid index out of bounds
    while (str1.length < str2.length) {
        str1 = "0" + str1;
    }

    while (str2.length < str1.length) {
        str2 = "0" + str2;
    }

    let sum = 0;

    // Loop for calculate the sum
    for (let i = 0; i < str1.length; i++) {
        let digit1 = parseInt(str1[i]);
        let digit2 = parseInt(str2[i]);
        sum += digit1 * digit2;
    }

    return sum;
}

// Test cases
console.log(sumOfProducts(6, 34));    // Output: 24
console.log(sumOfProducts(123, 45));  // Output: 23 (3*5 + 2*4 + 1*0)
console.log(sumOfProducts(12, 345));  // Output: 23 (2*5 + 1*4 + 0*3)
