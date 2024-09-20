function calculateNumber(type, a, b) {
  const num1 = Number(a);
  const num2 = Number(b);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    throw new TypeError('Invalid number inputs');
  }
  
  if (type === 'SUM') {
    return (Math.round(num1) + Math.round(num2));
  } else if (type === 'SUBTRACT') {
    return (Math.round(num1) - Math.round(num2));
  } else if (type === 'DIVIDE') {
    if (Math.round(num2) === 0) {
      return 'Error';  // Return 'Error' for division by 0
    }
    return (Math.round(num1) / Math.round(num2));
  } else {
    throw new TypeError('Invalid operation type');
  }
}

module.exports = calculateNumber;

