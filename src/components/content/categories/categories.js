import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Categories extends Component {
    render(){
        return (
            <div className="main-container">
                <div className="main-content-container">
                    <h3 className="main-content-header">Categories</h3>
                    
                </div>
            </div>        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories
    };
}

const mapDispatchToProps = dispatch => {
    return {
      getCategories: () => dispatch({ type: "GET_CATEGORIES" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);