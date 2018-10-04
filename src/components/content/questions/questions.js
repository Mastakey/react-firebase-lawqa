import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import QuestionSummary from './question_summary';

class Questions extends Component{
    componentDidMount(){
        this.props.getQuestions();
    }
    render(){
        console.log("props", this.props);
        const questions = this.props.questions;
        return (
            <div className="main-container">
                <div className="main-content-container">
                    <h3 className="main-content-header">Questions</h3>
                    <Link className="action-links" to='/questions/add' >Add Question</Link>
                    {
                        questions && questions.map(question => {
                            return <QuestionSummary question={question} key={question.id} />
                        })
                    }
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions.questions
    };
}

const mapDispatchToProps = dispatch => {
    return {
      getQuestions: () => dispatch({ type: "GET_QUESTIONS" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);