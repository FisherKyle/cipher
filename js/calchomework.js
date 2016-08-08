$(document).ready(function() {
    $(".geometric img").click(function() {
      alert("This is where the ");
    });

    $(".abstract img").click(function() {
      alert("This is where the ");
    });

});

var getSentence = function() {
  var sentence = prompt("Input sentence");
  return sentence;
};

var getCapitals = function(myString) {
  var myStringLength = myString.length;
  var capitalFirst = myString.charAt(0).toUpperCase();
  var capitalLast = myString.charAt(myStringLength - 1).toUpperCase();
  alert("Capitals: " + capitalFirst + " " + capitalLast);
  return (capitalFirst + capitalLast);
}



var reverseCapitals = function(reversedString) {
  var reversedStringLength = reversedString.length;
  var temp = "";

  for (var i = reversedStringLength; i >= 0 ; i--) {
    temp = temp + reversedString.charAt(i);
  }
  alert("reversedString: " + temp);
  return temp;
}

reverseCapitals(getCapitals(getSentence()));
