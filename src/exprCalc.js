const toCalcExpression = (operator, operand1, operand2) => {
  let result;
  if (operator === '+') {
    result = operand1 + operand2;
  }
  if (operator === '-') {
    result = operand1 - operand2;
  }
  if (operator === '*') {
    result = operand1 * operand2;
  }
  return result;
};

export default toCalcExpression;
