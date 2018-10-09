import React, {Component}from 'react';
import { connect } from 'react-redux';

class QuestionDetails extends Component{
    render(){
        return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">Title</span>
                    <p>Posted by Net Ninja</p>
                    <p className="grey-text">September 25, 2018</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedQuestion: state.questions.selectedQuestion
    };
}

const mapDispatchToProps = dispatch => {
    return {
      getQuestion: () => dispatch({ type: "GET_QUESTION" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);