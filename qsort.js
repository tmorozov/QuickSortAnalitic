function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

exports.median_pivot = function(arr, start, finish) {
  var i1 = start;
  var i2 = start + ~~((finish-start-1)/2);
  var i3 = finish -1;
  var a1 = arr[i1];
  var a2 = arr[i2];
  var a3 = arr[i3];

  if( a1<a2 && a2<a3) {
    swap(arr, start, i2);
    return;
  }
  if( a3<a2 && a2<a1) {
    swap(arr, start, i2);
    return;
  }

  if( a1<a3 && a3<a2) {
    swap(arr, start, i3);
    return;
  }
  if( a2<a3 && a3<a1) {
    swap(arr, start, i3);
    return;
  }

}

exports.last_pivot = function (arr, start, finish) {
  swap(arr, start, finish-1);
}

function set_pivot_first(arr, start, finish) {

}

var total_comp = 0;

function partition(arr, start, finish, set_pivot) {
  var m = finish - start;
  if (m <= 1) {
    return;
  }
  total_comp += m-1;
  set_pivot(arr, start, finish);

  var p = arr[start];
  var i = start+1;
  for (var j=(start+1); j<finish; j++) {
    if (arr[j]<p) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, start, i-1);

  partition(arr, start, i-1, set_pivot);
  partition(arr, i, finish, set_pivot);
}

exports.qsort = function (arr, pivot_selector) {
  pivot_selector = pivot_selector || set_pivot_first;
  partition(arr, 0, arr.length, pivot_selector);
  console.log('comparations: ',total_comp);
}

