import React from 'react';
function Merge() {
  return (
    <div>
      <p>{`split each element into partitions of size 1`}</p>

      <p>{`recursively merge adjacent partitions`}</p>

      <p>{`for i = leftPartIdx to rightPartIdx`}</p>

      <p>{`if leftPartHeadValue <= rightPartHeadValue`}</p>

      <p>{`copy leftPartHeadValue`}</p>

      <p>{`else: copy rightPartHeadValue; Increase InvIdx`}</p>

      <p>{`copy elements back to original array`}</p>
    </div>
  );
}
export default Merge;
