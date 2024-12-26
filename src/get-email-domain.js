const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const lastAtIndex = email.lastIndexOf('@');
  if (lastAtIndex === -1 || lastAtIndex === 0 || lastAtIndex === email.length - 1) {
    throw new Error();
  }
  return email.substring(lastAtIndex + 1);
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain
};
