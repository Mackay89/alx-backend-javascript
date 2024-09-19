function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const sum = totalAmount + totalShipping;
  console.log(`The total is: ${sum}`);
}

module.exports = sendPaymentRequestToApi;
