import React from 'react';
function Quick() {
  return (
    <div>
      <p>{`for each (unsorted) partition`}</p>

      <p>{`set middle element as pivot`}</p>

      <p>{`storeIndex = pivotIndex+1`}</p>

      <p>{`for i = pivotIndex+1 to rightmostIndex`}</p>

      <p>{`if (a[i] < a[pivot]) or (equal but 50% lucky))`}</p>

      <p>{`swap(i, storeIndex); ++storeIndex`}</p>

      <p>{`swap(pivot, storeIndex-1)`}</p>
    </div>
  );
}
export default Quick;
