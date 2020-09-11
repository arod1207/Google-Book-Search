import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/shared/Navbar/Navbar';
import Header from './components/shared/Header/Header';

import './App.css';
import SavedPage from './components/SavedPage/SavedPage';
import HomePage from './components/HomePage/HomePage';

import Test from './components/test/test';

function App() {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <Header />
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/saved" exact>
                    <SavedPage />
                </Route>
                <Route path="/test" exact>
                    <Test />
                </Route>
            </div>
        </Router>
    );
}

export default App;
