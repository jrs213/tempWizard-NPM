   // index.js
    function c2f(celsius) {
      if (typeof celsius !== 'number') {
        throw new TypeError('Input must be a number.');
      }
      return (celsius * 9 / 5) + 32;
    }

    function f2c(fahrenheit) {
      if (typeof fahrenheit !== 'number') {
        throw new TypeError('Input must be a number.');
      }
      return (fahrenheit - 32) * 5 / 9;
    }

    module.exports = {
      c2f,
      f2c
    };