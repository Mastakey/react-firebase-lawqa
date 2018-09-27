import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="dashboard container">
            <h3>Main Content</h3>
            <Link to="/questions">Questions</Link>
        </div>
    );
}

export default Home;