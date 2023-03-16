let numbers = [-1, 4, 9, 0, 16, 24.7];

var largest = numbers[0];
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {

  if (numbers[i] > largest) {
    largest = numbers[i];
  } 
  else if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}
  document.write("Largest Number- ", largest);
  document.write("<br>");
  document.write("<br>");
  document.write("Smallest Number- ", smallest);