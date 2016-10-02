var Challenge;


Challenge = {
  smallestCommons: function(arr) {
    var result = 1;
    var start = arr[0];
    var end = arr[1];

    if (start > end) {
      var temp = start;
      start = end;
      end = temp;
    }

    var maxEven;
    if (this.isOdd(end)) {
      maxEven = end - 1;
    } else {
      maxEven = end;
    }

    for (i = end; i >= start; i--) {
      if ( result % i !== 0 &&
           ( this.isOdd(i) ||
             i === maxEven ) ) {
        result = i * result;
      }
    }
    return result;
  },

  isOdd: function(value) {
    return value % 2 === 1;
  }
};

module.exports = Challenge;
