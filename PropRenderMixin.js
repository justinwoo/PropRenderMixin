var propEqual = require('./propEqual');

/**
 * provide the shouldComponentUpdate method for consumers.
 */
module.exports = {
  shouldComponentUpdate: function (nextProps) {
    return !propEqual(this.props, nextProps);
  }
}
