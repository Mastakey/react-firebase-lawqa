import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="main-container">
            <div className="home-jumbo"></div>
            <div className="main-content-container">
                <div className="main-content">
                    <Link to="/questions">Questions</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;