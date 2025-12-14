import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

import './App.css';

// Component to handle GitHub Pages SPA redirects
function GitHubPagesRedirect() {
    const navigate = useNavigate();
    
    useEffect(() => {
        // Check if this is a redirect from 404.html
        const redirect = sessionStorage.getItem('redirect');
        if (redirect) {
            sessionStorage.removeItem('redirect');
            navigate(redirect);
        }
        
        // Handle the GitHub Pages SPA hack
        const query = window.location.search;
        if (query.slice(1, 3) === '/?') {
            const route = query.slice(3).replace(/&/g, '?').replace(/~and~/g, '&');
            navigate(route);
        }
    }, [navigate]);
    
    return null;
}

function App() {
    return (
        <div className="App">
            <Router basename={import.meta.env.BASE_URL}>
                <GitHubPagesRedirect />
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
