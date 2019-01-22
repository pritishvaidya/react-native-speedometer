/* eslint radix: ["error", "as-needed"] */
/* eslint-disable no-restricted-globals */
function limitValue(value, minValue, maxValue) {
  let currentValue = 0;
  if (!isNaN(value)) {
    currentValue = parseInt(value);
  }
  return Math.min(Math.max(currentValue, minValue), maxValue);
}

export default limitValue;
