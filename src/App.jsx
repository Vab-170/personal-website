import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;