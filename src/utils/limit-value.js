/* eslint radix: ["error", "as-needed"] */
function limitValue(value, minValue, maxValue) {
  return Math.min(Math.max(parseInt(value), minValue), maxValue);
}

export default limitValue;
