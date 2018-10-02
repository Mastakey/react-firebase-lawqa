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
            <div className="container content-questions">
                <h3>Questions</h3>
                {
                    questions && questions.map(question => {
                        return <QuestionSummary question={question} key={question.id} />
                    })
                }
                <Link to='/questions/add' >Add Question</Link>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions
    };
}

const mapDispatchToProps = dispatch => {
    return {
      getQuestions: () => dispatch({ type: "GET_QUESTIONS" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);