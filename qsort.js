function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function partition(arr, start, finish) {
  if ((finish - start) <= 1) {
    return;
  }

  var p = arr[start];
  var i = start+1;
  for (var j=(start+1); j<finish; j++) {
    if (arr[j]<p) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, start, i-1);

  partition(arr, start, i-1);
  partition(arr, i, finish);
}

exports.qsort = function (arr) {
  partition(arr, 0, arr.length);
}

