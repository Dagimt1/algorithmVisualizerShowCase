import React from 'react';
import arrayRepImage from './assets/arrayRep.png';  // Import the image of array representation
import sortingDemoVideo from './assets/SortFinalDemo.mov';  // Import the demo video
import './SortingVisualizerPage.css';  // Custom styles for the sorting page

const SortingVisualizerPage = () => {
  return (
    <div className="sorting-page">
      <h1 className="font-serif title">Sorting Visualizer</h1>
      <p className="font-serif description">
        The Sorting Visualizer component works similarly to the Pathfinder component, but instead of visualizing grid traversal, it visualizes the sorting of an array. The user selects a sorting algorithm (e.g., Bubble Sort, Merge Sort, Quick Sort), and the component animates how the array gets sorted.
      </p>

      <h2 className="font-serif subtitle">Key Features</h2>
      <ul className="font-serif description">
        <li>Array Generation: A random array is generated and displayed as bars, where the height of each bar represents the value of the array element.</li>
        <li>Algorithms: The user can choose different sorting algorithms like Bubble Sort, Merge Sort, or Quick Sort.</li>
        <li>Visualization: The component updates the visual representation of the array in real-time as the algorithm processes it.</li>
      </ul>

      <h2 className="font-serif subtitle">Sample Code Snippets</h2>
      
      {/* Code Snippet Cards */}
      <div className="code-snippet-cards">
        <div className="code-card">
          <h3 className="font-serif">Array Initialization</h3>
          <pre>
            {`
const generateRandomArray = (size) => {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 500) + 5); // Values between 5 and 500
  }
  return array;
};
            `}
          </pre>
        </div>

        <div className="code-card">
          <h3 className="font-serif">Bubble Sort Algorithm with Visualization</h3>
          <pre>
            {`
const bubbleSort = (array, setArray) => {
  const animations = [];
  const auxiliaryArray = array.slice();
  
  for (let i = 0; i < auxiliaryArray.length; i++) {
    for (let j = 0; j < auxiliaryArray.length - i - 1; j++) {
      animations.push([j, j + 1]);
      if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
        animations.push([j, auxiliaryArray[j + 1]]);
        animations.push([j + 1, auxiliaryArray[j]]);
        const temp = auxiliaryArray[j];
        auxiliaryArray[j] = auxiliaryArray[j + 1];
        auxiliaryArray[j + 1] = temp;
      }
    }
  }
  
  return animations;
};
            `}
          </pre>
        </div>
      </div>

      {/* Array Representation Image */}
      <div className="image-container">
        <h2 className="font-serif subtitle">Array Representation as a Graph</h2>
        <img src={arrayRepImage} alt="Array Representation" className="array-image" />
      </div>

      {/* Final Demo Video */}
      <div className="video-container">
        <h2 className="font-serif subtitle">Sorting Visualizer Demo</h2>
        <video className="demo-video" src={sortingDemoVideo} controls />
      </div>
    </div>
  );
};

export default SortingVisualizerPage;
