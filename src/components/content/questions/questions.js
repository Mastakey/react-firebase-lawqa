import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import QuestionSummary from './question_summary';
import { getQuestions } from '../../../store/actions';

class Questions extends Component{
    constructor(props){
        super(props);
        this.state = {
            questions: []
        }
    }
    componentDidMount(){
        this.props.getQuestions();
    }
    render(){
        console.log("props", this.props);
        const questions = this.props.questions;
        Promise.all([this.props.questions]).then((data) => {
            if (data && data.length > 0){
                data.forEach((doc) => {
                    if (doc && doc.size && doc.size > 0){
                        console.log(doc.data());
                    }
                    
                    
                });
                
            }
        });
        return (
            <div className="container content-questions">
                <h3>Questions</h3>
                {
                    questions && questions.data && questions.map(question => {
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