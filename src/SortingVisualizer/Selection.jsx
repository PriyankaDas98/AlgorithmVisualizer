import React from 'react';
function Selection() {
  return (
    <div>
      <p>{`repeat (numOfElements - 1) times`}</p>

      <p>{`set the first unsorted element as the minimum`}</p>

      <p>{`for each of the unsorted elements`}</p>

      <p>{`if element < currentMinimum`}</p>

      <p>{`set element as new minimum`}</p>

      <p>{`swap minimum with first unsorted position`}</p>
    </div>
  );
}
export default Selection;
