var min = function (list) {
  let minVlue = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i] < minVlue) {
      minVlue = list[i];
    }
  }

  return minVlue;
};

var max = function (list2) {
  let highvalue = list2[0];
  for (let i = 0; i < list2.length; i++) {
    if (list2[i] > highvalue) {
      highvalue = list2[i]
    }
  }
  return highvalue
};
console.log(max([1, 3, 4, 5, 2, 4, 5, 3]));
