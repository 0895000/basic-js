const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    const getDepth = (array) => {
      if (!Array.isArray(array)) return 0;
      let maxDepth = 0;
      for (const element of array) {
        maxDepth = Math.max(maxDepth, getDepth(element));
      }
      return 1 + maxDepth;
    };
    return getDepth(arr);
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
