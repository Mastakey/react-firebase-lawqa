import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="fullcontainer">
            <div className="home-jumbo">HOme</div>
            <div className="dashboard container">
                <Link to="/questions">Questions</Link>
            </div>
        </div>
    );
}

export default Home;