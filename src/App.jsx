import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

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
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
