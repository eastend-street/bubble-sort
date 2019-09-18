function sort() {
  // convert input array to int array
  const inputArray = document
    .getElementsByClassName("input-array")[0]
    .value.split(",");
  let inputIntArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    inputIntArray.push(Number(inputArray[i]));
  }

  // bubble sort
  for (var i = 0; i < inputIntArray.length; i++) {
    for (var j = inputIntArray.length - 1; j > i; j--) {
      if (inputIntArray[j] < inputIntArray[j - 1]) {
        var tmp = inputIntArray[j];
        inputIntArray[j] = inputIntArray[j - 1];
        inputIntArray[j - 1] = tmp;
      }
    }
  }

  // print
  document.getElementsByClassName("result")[0].innerHTML = inputIntArray;
}
