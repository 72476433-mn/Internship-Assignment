function findTax(salary) {
    let taxAmount = 0;

    switch (true) {
        case salary > 0 && salary <= 500000:
            taxAmount = 0; // 0% tax
            break;

        case salary > 500000 && salary <= 1000000:
            taxAmount = salary * 0.10; // 10% tax
            break;

        case salary > 1000000 && salary <= 1500000:
            taxAmount = salary * 0.20; // 20% tax
            break;

        case salary > 1500000:
            taxAmount = salary * 0.30; // 30% tax
            break;

        default:
            return "Invalid salary"; //  invalid input
    }

    return taxAmount;
}

// Example :
console.log(findTax(450000)); // Output: 0
console.log(findTax(750000)); // Output: 75000 (10% of 750000)
console.log(findTax(1250000)); // Output: 250000 (20% of 1250000)
console.log(findTax(2000000)); // Output: 600000 (30% of 2000000)
console.log(findTax(-1000));   // Output: "Invalid salary"
