const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element === '--discard-prev') {
      if (result.length > 0) {
        result.pop();
      }
    } else if (element === '--discard-next') {
      // Skip the next element
      i++;
    } else if (element === '--double-prev') {
      if (result.length > 0) {
        result.push(result[result.length - 1]);
      }
    } else if (element === '--double-next') {
      if (i + 1 < arr.length) {
        result.push(arr[i + 1]);
      }
    } else {
      result.push(element);
    }
  }

  return result;
  // remove line with error and write your code here
}

module.exports = {
  transform
};
