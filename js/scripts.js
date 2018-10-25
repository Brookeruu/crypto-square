function giveNextLargestSquare(someValue) {
  var tempValue = Math.floor(Math.sqrt(someValue));
  var newSize = Math.pow((tempValue + 1), 2);
  return newSize;
}

function resizeArrayToSquared(someArray,newSize) {
  var tempstring = someArray.join("");
  var newerArraytemp = tempstring.padEnd(newSize," ");
  return newerArraytemp.split("");
}

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var originalString = $("input#userInput").val();
//    var originalStringArray = originalString.split("");
    console.log(originalString);
    var originalStringArrayed = originalString.split("");
    var originalStringResized = resizeArrayToSquared(originalStringArrayed,giveNextLargestSquare(originalString.length));
    console.log(originalStringResized);

    });
});
