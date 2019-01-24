/* eslint radix: ["error", "as-needed"] */
/* eslint-disable no-restricted-globals */
function validateSize(current, original) {
  let currentSize = original;
  if (!isNaN(current)) {
    currentSize = parseInt(current);
  }
  return currentSize;
}

export default validateSize;
