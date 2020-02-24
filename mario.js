
function generatePyramid(num) { //pyramid function

  let arr = [];  //declaring the array

  for (let i = 0; i < num; i++) { //iterating through the array index

    arr[i] = "";  //initializing array values

    if (i < num - 1) {  //if test for second rows and above

      for (let index = i; index < num - 1; index++) { //creating spacing in each array index
        arr[i] += (" ");
      }

      for (let index = i + 1; index >= 0; index--) { //placing 'bricks' in each array index

        arr[i] += ("#");
      }
    }
    else {

      //placing 'bricks' in the last array index
      for (let index = 0; index < num + 1; index++) {
        arr[i] += ("#");
      }
    }
  }

  for (let x = 0; x < num; x++) { //displaying the pyramid
    console.log(arr[x]);
  }
}
generatePyramid(5); //call to the pyramid function