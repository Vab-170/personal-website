import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

import './App.css';

// Works with ONE build deployed to:
// - https://vabgupta.pages.dev/           (basename = "")
// - https://vab-170.github.io/personal-website/  (basename = "/personal-website")
const getBasename = () => {
  const path = window.location.pathname;
  return path.startsWith('/personal-website') ? '/personal-website' : '';
};

function App() {
  const basename = getBasename();

  return (
    <div className="App">
      <Router basename={basename}>
        <Suspense
          fallback={
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
