
// Merge Sort

export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations,) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations,) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}



// Bubble Sort

export function getBubbleSortAnimations(array) {
  const animations2 = []; // 2D Array
  if (array.length <= 1) return array;
  doBubble(array, array.length, animations2);
  return animations2;
}

function doBubble(mainArray2, endIdx, animations2,){
  let n = endIdx;
  for (let i = 0; i < n-1; i++){
    for (let j = 0; j < n-i-1; j++){
      animations2.push([j,j+1]);
      animations2.push([j,j+1]);
      if (mainArray2[j] > mainArray2[j+1]){
        animations2.push([j, mainArray2[j+1]]);
        animations2.push([j+1, mainArray2[j]]);
        let temp = mainArray2[j];
        mainArray2[j] = mainArray2[j+1];
        mainArray2[j+1] = temp; 
      }
      else{
        animations2.push([j, mainArray2[j]]);
        animations2.push([j+1, mainArray2[j+1]]);
      }
    }
  }
}


// selection sort

export function getSelectionSortAnimations(array) {
  const animations3 = [];
  if (array.length <= 1) return array;
  doSelection(array, array.length, animations3);
  return animations3;
}


function doSelection(mainArray3, endIdx, animations3,){
  var i, j, min_idx;
  var n = endIdx;
  for (i = 0; i < n-1; i++){
      min_idx = i;
      for (j = i + 1; j < n; j++){
        if (mainArray3[j] < mainArray3[min_idx])
          min_idx = j;
      }
      animations3.push([i,min_idx]);
      animations3.push([i,min_idx]);
      animations3.push([i, mainArray3[min_idx]]);
      animations3.push([min_idx, mainArray3[i]]);
      var temp = mainArray3[min_idx];
      mainArray3[min_idx] = mainArray3[i];
      mainArray3[i] = temp;
  }
}

// Insertion Sort

export function getInsertionAnimations(array) {
  const animations5 = [];
  const status = [];
  if (array.length <= 1) return array;
  doInsertion(array, array.length, animations5, status);
  return [animations5, status];
}


function doInsertion(mainArray5, endIdx, animations5, status,) { 
    let i, key, j; 
    for (i = 1; i < endIdx; i++){ 
        key = mainArray5[i];
        animations5.push([i,i]);
        status.push(0);
        animations5.push([i,i]);
        status.push(1);
        j = i - 1; 
        while (j >= 0 && mainArray5[j] > key){
            animations5.push([j+1,mainArray5[j]])
            status.push(2);
            animations5.push([j,0])
            status.push(2);
            mainArray5[j + 1] = mainArray5[j]; 
            j = j - 1; 
        }
        animations5.push([j+1,key]);
        status.push(3);
        mainArray5[j + 1] = key; 
    }
}


//Quick Sort

export function getQuickSortAnimations(array){
  const animations4 = [];
  const status = [];
  if (array.length <= 1) return array;
  doQuick(array, 0, array.length-1, animations4, status);
  return [animations4, status];
}

function doQuick(mainArray4, left, right, animations4, status,){
  var index;
    if (mainArray4.length > 1) {
        index = partition(mainArray4, left, right, animations4, status);
        if (left < index - 1) {
            doQuick(mainArray4, left, index - 1, animations4, status);
        }
        if (index < right) {
            doQuick(mainArray4, index, right, animations4, status);
        }
    }
}

function partition(mainArray4, left, right, animations4, status, ) {
    var mid     = Math.floor((right + left) / 2),
        pivot   = mainArray4[mid],
        i       = left,
        j       = right; 

    animations4.push([mid,mid]);
    status.push(0);
    animations4.push([mid,mid]);
    status.push(1);
    while (i <= j) {
        while (mainArray4[i] < pivot) {
            animations4.push([i,mid]);
            status.push(2);
            animations4.push([i,mid]);
            status.push(3);
            i++;
        }
        while (mainArray4[j] > pivot) {
            animations4.push([j,mid]);
            status.push(2);
            animations4.push([j,mid]);
            status.push(3);
            j--;
        }
        if (i <= j) {
            animations4.push([i,mainArray4[j]]);
            status.push(4);
            animations4.push([j,mainArray4[i]]);
            status.push(4);
            var temp = mainArray4[i];
            mainArray4[i] = mainArray4[j];
            mainArray4[j] = temp;
            i++;
            j--;
        }
    }
    // animations4.push([i,i]);
    // status.push(5);
    return i;
}