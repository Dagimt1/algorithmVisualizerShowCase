import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisualizerShowcase from './components/VisualizerShowcase';
import PathfinderPage from './components/PathfinderPage';  // Existing Pathfinder page
import SortingVisualizerPage from './components/SortingVisualizerPage';  // Import the new Sorting Visualizer page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VisualizerShowcase />} />
        <Route path="/pathfinder" element={<PathfinderPage />} />
        <Route path="/sorting" element={<SortingVisualizerPage />} />  {/* New route for Sorting Visualizer */}
      </Routes>
    </Router>
  );
}

export default App;
