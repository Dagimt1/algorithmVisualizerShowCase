import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import pathfinderVideo from './assets/pathfinderRec.mov';  // Import the local video
import sortingVideo from './assets/sortingFinal.mov';      // Import the local video
import './VisualizerShowcase.css';

const VisualizerShowcase = () => {
  return (
    <div className="container">
      {/* Left Section - Text */}
      <div className="left-section">
        <h1 className="font-serif title">Hey, I'm Dagim 👋</h1>
        <p className="font-serif description">
          Welcome to the interactive showcase of some of the key components of this project. These visuals will guide you through the core algorithms that are at the heart of the app.
        </p>
        <p className="font-serif description">
          <strong>Pathfinder Visualizer:</strong> This component allows you to explore how pathfinding algorithms like A* and Dijkstra's algorithm work. You can see how the algorithm dynamically calculates the shortest path from one point to another, providing a clear visualization of the search process.
        </p>
        <p className="font-serif description">
          <strong>Sorting Visualizer:</strong> This feature brings sorting algorithms to life. Whether it's Merge Sort, Quick Sort, or Bubble Sort, you can watch how each algorithm processes data step by step, making complex sorting processes more understandable.
        </p>
        <p className="font-serif description">
          <strong>Data Structure Visualizer:</strong> This interactive section helps you understand how various data structures like trees, stacks, and queues operate. By seeing the internal workings of these structures, you gain a clearer grasp of how data is organized and manipulated in programming.
        </p>
      </div>

      {/* Right Section - Visualizer Cards */}
      <div className="right-section">
        <div className="project-card">
          <h2 className="font-serif">Projects · Pathfinder</h2>
          <Link to="/pathfinder">
            <div className="card-content">
              <video
                className="video-bg"
                src={pathfinderVideo}  // Use the local video file for Pathfinder
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </Link>
        </div>

        <div className="project-card">
          <h2 className="font-serif">Projects · Sorting</h2>
          <Link to="/sorting">  {/* Link to the sorting visualizer page */}
            <div className="card-content">
              <video
                className="video-bg"
                src={sortingVideo}  // Use the local video file for Sorting
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </Link>
        </div>

        <div className="project-card">
          <h2 className="font-serif">Projects · Core Data Structures</h2>
          <div className="card-content">
            <img
              className="image-bg"
              src="https://cdn.dribbble.com/userupload/14533756/file/original-e5384b09cb48504009b2ddc8f2ed42eb.gif"
              alt="Core Data Structures Visualizer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualizerShowcase;
