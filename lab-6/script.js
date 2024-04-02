function checkEvenOdd() {
    const numberInput = document.getElementById("numberInput");
    const number = parseInt(numberInput.value);
    const result = document.getElementById("result");
  
    if (number % 2 === 0) {
      result.textContent = `${number} is even.`;
    } else {
      result.textContent = `${number} is odd.`;
    }
  }
  