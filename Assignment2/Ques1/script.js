function displayEvenNumbers() {
    const outputDiv = document.getElementById("output");
    let evenNumbers = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    outputDiv.innerHTML = evenNumbers.join(", ");
}