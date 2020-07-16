const reduce = function (list, cb, initial) {
  //loop through the list
  let accumulator = initial;
  for (var i = 0; i < list.length; i++) {
    if (i == 0 && !!accumulator) {
      accumulator = list[0];
    } else {
      accumulator = cb(list[i], accumulator);
    }
  }
  //call the cb with arr[i],prev/initial value
  //Save the return value
  //return result
  return accumulator;
};

reduce([1, 2, 3], (v, sum) => v + sum);
