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
    var LCM = 0;
    var found = false;
    while (!found) {
    	LCM++;
	    for (var i = start; i <= end; i++) {
	      if ( LCM % i !== 0 )  {
	        break;
	      } else if (i === end ) {
	      	return LCM;
	      }
	    }
    }
    // console.log(possible);
  },

  isOdd: function(value) {
    return value % 2 === 1;
  }
};

module.exports = Challenge;
