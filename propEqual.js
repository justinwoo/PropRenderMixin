/**
 * Check properties of a for equality with b.
 */
module.exports = function (a, b) {
  var key;
  for (key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
