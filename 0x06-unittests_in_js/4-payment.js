const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const rslt = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${rslt}`); // Use backticks here
  return rslt;
}

module.exports = sendPaymentRequestToApi;

