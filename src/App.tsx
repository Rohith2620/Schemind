import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-gray-900 text-white">
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/login" element={<div>Login Page</div>} />
            <Route path="/signup" element={<div>Signup Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

// Route structure defined