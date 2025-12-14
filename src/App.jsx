import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

import './App.css';

function App() {
    return (
        <div className="App">
            <Router basename={import.meta.env.BASE_URL}>
                <Suspense fallback={
                    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
                    </div>
                }>
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
