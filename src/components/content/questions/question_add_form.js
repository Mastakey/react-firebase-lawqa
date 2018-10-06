import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { RenderInput, RenderTextarea, RenderSelect } from '../../util/forms/redux-form-render';


class QuestionAddForm extends Component {
    componentDidUpdate() {
        console.log("comp update", this.props);
        if (this.props.addStatus && this.props.redirect) {
            this.props.history.push('/questions');
        }
    }

    onSubmit(values) {
        console.log(values);
        this.props.addQuestion(values.title, values.details);
    }

    render() {
        const handleSubmit = this.props.handleSubmit;
        return (
            <div className="main-content-container">
                <div className="main-content">
                    <div className="form-container">
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="border border-light p-5 form-add-question">
                            <p className="h5 mb-4 text-center">Ask a Lawyer</p>
                            <Field name="title" type="text" label="Ask your question, start with What, How, Why" component={RenderInput} />
                            <Field name="details" type="textarea" label="Add more details or give some background" component={RenderTextarea}/>
                            <button type="submit" className="btn btn-info btn-block my-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function validate(values) {
    let errors = {};
    // Validate the inputs from 'values'
    if (!values.title) {
        errors.title = "Question is required";
    }
    return errors;
}

const mapStateToProps = (state) => {
    return {
        firebase: state.firebase,
        addStatus: state.questions.addStatus,
        redirect: state.questions.redirect
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addQuestion: (title, details) => dispatch({ 
            type: "ADD_QUESTION", 
            title: title, 
            details: details 
        })
    };
};

export default reduxForm({
    validate: validate,
    form: 'QuestionAddForm' //this has to be unique
})(
    connect(mapStateToProps, mapDispatchToProps)(QuestionAddForm)
);