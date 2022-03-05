import React from 'react';
function Insertion() {
  return (
    <div>
      <p>{`mark first element as sorted`}</p>

      <p>{`for each unsorted element X`}</p>

      <p>{`'extract' the element X`}</p>

      <p>{` for j = lastSortedIndex down to 0`}</p>

      <p>{`if current element j > X`}</p>

      <p>{`move sorted element to the right by 1`}</p>

      <p style={{margin: "0px"}}>{` break loop and insert X here`}</p>
    </div>
  );
}
export default Insertion;
