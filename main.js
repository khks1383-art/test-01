document.addEventListener('DOMContentLoaded', () => {
    const numbersSection = document.getElementById('numbers-section');
    const generateBtn = document.getElementById('generate-btn');

    const getNumberColor = (number) => {
        if (number <= 10) return '#fbc400'; // Yellow
        if (number <= 20) return '#69c8f2'; // Blue
        if (number <= 30) return '#ff7272'; // Red
        if (number <= 40) return '#aaa';    // Gray
        return '#b0d840'; // Green
    };

    const generateNumbers = () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    };

    const displayNumbers = (numbers) => {
        numbersSection.innerHTML = ''; // Clear previous numbers
        numbers.forEach(number => {
            const numberEl = document.createElement('div');
            numberEl.className = 'number';
            numberEl.textContent = number;
            const color = getNumberColor(number);
            numberEl.style.backgroundColor = color;
            numberEl.style.boxShadow = `0 0 15px ${color}, 0 0 25px ${color}`;
            numbersSection.appendChild(numberEl);
        });
    };

    generateBtn.addEventListener('click', () => {
        const newNumbers = generateNumbers();
        displayNumbers(newNumbers);
    });

    // Generate numbers on initial load
    displayNumbers(generateNumbers());
});
