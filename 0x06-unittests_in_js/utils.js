const Utils = {
  calculateNumber(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    if (type === 'SUM') return roundedA + roundedB;
    if (type === 'SUBTRACT') return roundedA - roundedB;
    if (type === 'DIVIDE') return roundedB !== 0 ? roundedA / roundedB : 'ERROR';
    
    // Handle unexpected operation types
    throw new Error('Invalid operation type');
  }
}

module.exports = Utils;

