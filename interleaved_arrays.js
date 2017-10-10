/* ====== 2 INTERLEAVED ARRAYS MERGED INTO ONE ======*/

// I declare 2 arrays of the same length.
var array1 = ["1", "2", "3", "4", "5"]
var array2 = ["a", "b", "c", "d", "e"]

// This third array is the one that will contain the interleaved merge.
var array3 = []

/* The for loop iterates through the length of the first array
  (which is the same as the second, so it's only necessary to consider one of
  them) and adds the elements one by one. */
for ( i = 0 ; i < array1.length ; i++ ){
  array3.push(array1[i])
  array3.push(array2[i])
}

// Tell the Console to print the new formed array.
console.log(array3);
