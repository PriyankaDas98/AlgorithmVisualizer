import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import {getBubbleSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import {getSelectionSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import {getInsertionAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import {getQuickSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';

import './SortingVisualizer.css';
import Bubble from './Bubble.jsx';
import Insertion from './Insertion.jsx';
import Selection from './Selection.jsx';
import Merge from './Merge.jsx';
import Quick from './Quick.jsx';
import TimeBubble from './TimeBubble.jsx';
import TimeMerge from './TimeMerge.jsx';
import TimeInserion from './TimeInsertion.jsx';
import TimeQuick from './TimeQuick.jsx';
import TimeSelection from './TimeSelection.jsx';

// Change this value for the speed of the animations.
let ANIMATION_SPEED_MS = 0;

// Change this value for the number of bars (value) in the array.
let NUMBER_OF_ARRAY_BARS = 0;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

//let timeComp = 'yo';
export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    var regex = /^[0-9]+$/;
    var x = document.getElementById('arr-size').value;
    if (x.match(regex)) {
      if (x <= 50) {
        NUMBER_OF_ARRAY_BARS = document.getElementById('arr-size').value;
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
          array.push(randomIntFromInterval(80, 300));
        }
        this.setState({array});
      } else {
        alert('Value Can Not Be More Than 50.');
      }
    } else {
      alert('Please Input a Numeric Value.');
    }
  }

  insertionSort() {
    const [animations, status] = getInsertionAnimations(this.state.array);
    ANIMATION_SPEED_MS = document.getElementById('myRange').value;
    makeDisable();
    let i = 0;
    while (i < animations.length) {
      const arrayBars = document.getElementsByClassName('array-bar');
      if (status[i] === 0) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = 'red';
        }, i * ANIMATION_SPEED_MS);
      } else if (status[i] === 1) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = 'turquoise';
        }, i * ANIMATION_SPEED_MS);
      } else if (status[i] === 2) {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        setTimeout(() => {
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      } else if (status[i] === 3) {
        const [barTwoIdx, newHeight2] = animations[i];
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barTwoStyle.height = `${newHeight2}px`;
        }, i * ANIMATION_SPEED_MS);
      }
      i = i + 1;
    }
    myInsertionFunction();
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    ANIMATION_SPEED_MS = document.getElementById('myRange').value;
    makeDisable();
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    myMergeFunction();
  }

  quickSort() {
    const [animations, status] = getQuickSortAnimations(this.state.array);
    console.log(status);
    console.log(animations);
    ANIMATION_SPEED_MS = document.getElementById('myRange').value;
    makeDisable();
    let i = 0;
    while (i < animations.length) {
      const arrayBars = document.getElementsByClassName('array-bar');
      if (status[i] === 0) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = 'green';
        }, i * ANIMATION_SPEED_MS);
      } else if (status[i] === 1) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = 'turquoise';
        }, i * ANIMATION_SPEED_MS);
      } else if (status[i] === 2) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = 'red';
          barTwoStyle.backgroundColor = 'red';
        }, i * ANIMATION_SPEED_MS);
      } else if (status[i] === 3) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = 'turquoise';
          barTwoStyle.backgroundColor = 'turquoise';
        }, i * ANIMATION_SPEED_MS);
      } else if (status[i] === 4) {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        // const [barTwoIdx, newHeight2] = animations[i+1];
        // const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.height = `${newHeight}px`;
          // barTwoStyle.height = `${newHeight2}px`
        }, i * ANIMATION_SPEED_MS);
      }
      i = i + 1;
    }
    myQuickFunction();
  }

  selectionSort() {
    const animations = getSelectionSortAnimations(this.state.array);
    ANIMATION_SPEED_MS = document.getElementById('myRange').value;
    makeDisable();
    let i = 0;
    while (i < animations.length) {
      const arrayBars = document.getElementsByClassName('array-bar');
      if (i % 4 === 0 || i % 4 === 1) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const [barTwoIdx, newHeight2] = animations[i + 1];
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.height = `${newHeight}px`;
          barTwoStyle.height = `${newHeight2}px`;
        }, i * ANIMATION_SPEED_MS);
        i = i + 1;
      }
      i = i + 1;
    }
    mySelectionFunction();
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    ANIMATION_SPEED_MS = document.getElementById('myRange').value;
    makeDisable();
    let i = 0;
    while (i < animations.length) {
      const arrayBars = document.getElementsByClassName('array-bar');
      if (i % 4 === 0 || i % 4 === 1) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const [barTwoIdx, newHeight2] = animations[i + 1];
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.height = `${newHeight}px`;
          barTwoStyle.height = `${newHeight2}px`;
        }, i * ANIMATION_SPEED_MS);
        i = i + 1;
      }
      i = i + 1;
    }
    myBubbleFunction();
  }

  clearAll() {
    window.location.reload();
  }

  render() {
    const {array} = this.state;

    return (
      <div>
        <div className="btn-container">
          <div>
            <h3>AlgoX</h3>
          </div>
          <div>
            <h6>Array Size </h6>
            <input
              type="text"
              inputmode="numeric"
              id="arr-size"
              defaultValue="50"
            />
          </div>
          <input
            type="button"
            id="G-Array"
            value="Generate New Array"
            onClick={() => {
              this.resetArray();
            }}
          />
          <input type="button" onClick={() => this.clearAll()} value="Reset" />

          <div>
            <h6>Fast </h6>
            <input
              type="range"
              min="50"
              max="1000"
              defaultValue="500"
              step="50"
              className="slider"
              id="myRange"
            />
            <h6>Slow </h6>
          </div>
          <div>
            <input
              type="button"
              id="bub"
              value="Bubble Sort"
              onClick={() => this.bubbleSort()}
            />
            <input
              type="button"
              id="ins"
              value="Insertion Sort"
              onClick={() => this.insertionSort()}
            />
            <input
              type="button"
              id="sel"
              value="Selection Sort"
              onClick={() => this.selectionSort()}
            />
            <input
              type="button"
              id="mer"
              value="Merge Sort"
              onClick={() => this.mergeSort()}
            />
            <input
              type="button"
              id="qui"
              value="Quick Sort"
              onClick={() => this.quickSort()}
            />
          </div>
        </div>
        <div className="pseudocode">
          <div className="pseudo" id="bubps">
            <Bubble />
          </div>
          <div className="pseudo" id="insps">
            <Insertion />
          </div>
          <div className="pseudo" id="selps">
            <Selection />
          </div>
          <div className="pseudo" id="merps">
            <Merge />
          </div>
          <div className="pseudo" id="quips">
            <Quick />
          </div>
        </div>
        <div className="array-div">
          <div className="array-container">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`,
                }}></div>
            ))}
          </div>
        </div>
        <div id="bubble">
          <TimeBubble />
        </div>
        <div id="merge">
          <TimeMerge />
        </div>
        <div id="selection">
          <TimeSelection />
        </div>
        <div id="insertion">
          <TimeInserion />
        </div>
        <div id="quick">
          <TimeQuick />
        </div>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function myBubbleFunction() {
  var x = document.getElementById('bubble');
  var y = document.getElementById('bubps');
  var z = document.getElementById('bub');
  z.style.backgroundColor = '#67a3bb';

  x.style.display = 'block';
  y.style.display = 'block';
}
function myMergeFunction() {
  var x = document.getElementById('merge');
  var y = document.getElementById('merps');
  var z = document.getElementById('mer');
  z.style.backgroundColor = '#67a3bb';
  x.style.display = 'block';
  y.style.display = 'block';
}
function mySelectionFunction() {
  var x = document.getElementById('selection');
  var y = document.getElementById('selps');
  var z = document.getElementById('sel');
  z.style.backgroundColor = '#67a3bb';
  x.style.display = 'block';
  y.style.display = 'block';
}

function myInsertionFunction() {
  var x = document.getElementById('insertion');
  var y = document.getElementById('insps');
  var z = document.getElementById('ins');
  z.style.backgroundColor = '#67a3bb';
  x.style.display = 'block';
  y.style.display = 'block';
}

function myQuickFunction() {
  var x = document.getElementById('quick');
  var y = document.getElementById('quips');
  var z = document.getElementById('qui');
  z.style.backgroundColor = '#67a3bb';
  x.style.display = 'block';
  y.style.display = 'block';
}

function makeDisable() {
  document.getElementById('arr-size').disabled = true;
  document.getElementById('myRange').disabled = true;
  document.getElementById('G-Array').disabled = true;
  document.getElementById('bub').disabled = true;
  document.getElementById('ins').disabled = true;
  document.getElementById('sel').disabled = true;
  document.getElementById('mer').disabled = true;
  document.getElementById('qui').disabled = true;
}

// function arraysAreEqual(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) return false;
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// }
