/**
 *
 * @param {string} str
 * @returns { undefined|string} - String with first and last letter of 'str', provided that 'str' has 2 or more characters.
 */
function stringPeeler(str) {
  if (str.length <= 2) return;

  return str[0] + str[str.length - 1];
}
