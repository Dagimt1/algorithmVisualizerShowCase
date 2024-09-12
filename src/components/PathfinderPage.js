import React from 'react';
import pathGrid from './assets/pathGrid.png';  // Image of the grid
import finalDemoVideo from './assets/finalDemo.mov';  // Demo video
import './PathfinderPage.css';  // Custom styles for Pathfinder page

const PathfinderPage = () => {
  return (
    <div className="pathfinder-page">
      <h1 className="font-serif title">Pathfinder Visualizer</h1>
      <p className="font-serif description">
        The Pathfinder component is designed to visually demonstrate how various pathfinding algorithms work on a grid. Users can interact by placing start and end points, adding obstacles, and selecting algorithms like Dijkstra’s, A*, and BFS to see how they explore the grid and find the shortest path.
      </p>

      <h2 className="font-serif subtitle">Key Features</h2>
      <ul className="font-serif description">
        <li>Grid: A grid of cells where each cell can represent different states: start, end, obstacle, or open.</li>
        <li>Algorithms: Implementations of common pathfinding algorithms like Dijkstra's, A*, and BFS.</li>
        <li>Visualization: Animates the exploration and highlights the shortest path in real-time.</li>
      </ul>

      <h2 className="font-serif subtitle">Sample Code Snippets</h2>
      
      {/* Code Snippet Cards */}
      <div className="code-snippet-cards">
        <div className="code-card">
          <h3 className="font-serif">Grid Initialization</h3>
          <pre>
            {`
const createGrid = (rows, cols) => {
  const grid = [];
  for (let row = 0; row < rows; row++) {
    const currentRow = [];
    for (let col = 0; col < cols; col++) {
      currentRow.push(createNode(row, col));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (row, col) => {
  return {
    row,
    col,
    isStart: false,
    isEnd: false,
    isVisited: false,
    isObstacle: false,
  };
};
            `}
          </pre>
        </div>

        <div className="code-card">
          <h3 className="font-serif">Dijkstra’s Algorithm</h3>
          <pre>
            {`
const dijkstra = (grid, startNode, endNode) => {
  const visitedNodes = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);

  while (!!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();

    if (closestNode.isObstacle) continue;
    if (closestNode.distance === Infinity) return visitedNodes;

    closestNode.isVisited = true;
    visitedNodes.push(closestNode);

    if (closestNode === endNode) return visitedNodes;
    updateUnvisitedNeighbors(closestNode, grid);
  }
};
            `}
          </pre>
        </div>
      </div>

      {/* Grid Image */}
      <div className="image-container">
        <h2 className="font-serif subtitle">Grid Visualization</h2>
        <img src={pathGrid} alt="Grid Visualization" className="grid-image" />
      </div>

      {/* Final Demo Video */}
      <div className="video-container">
        <h2 className="font-serif subtitle">Final Demo</h2>
        <video className="demo-video" src={finalDemoVideo} controls />
      </div>
    </div>
  );
};

export default PathfinderPage;
