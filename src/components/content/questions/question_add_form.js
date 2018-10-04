import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class QuestionAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: {}
        }
    }
    handleErrors(error) {
        console.log("handle error", error);
        //this.setState({
        //    errors: [...this.state.errors, error]
        //});
        this.setState({
            error: error
        })
    }
    renderField(field) {
        const className = "input-field";
        let jsxField = null;
        let jsxFieldInput = (
            <input type={field.type} id={field.name}
                {...field.input}
            />
        );
        let jsxFieldTextArea = (
            <textarea id={field.name} className="materialize-textarea"
                {...field.input}
            ></textarea>
        );
        if (field.type === 'textarea'){
            jsxField = jsxFieldTextArea;
        }
        else {
            jsxField = jsxFieldInput;
        }
        return (
            <div className={className}>
                <label htmlFor={field.name}>{field.label}</label>
                {jsxField}
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
        this.props.addQuestion(values.title, values.content);
    }
    render() {
        const handleSubmit = this.props.handleSubmit;
        return (
            <div className="container content-question-add-form">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="white">
                    <h5 className="grey-text text-darken-3">Add Question</h5>
                    <Field
                        name="title"
                        type="text"
                        label="Title"
                        component={this.renderField}
                    />
                    <Field
                        name="content"
                        type="textarea"
                        label="Details"
                        component={this.renderField}
                    />
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Post</button>
                    </div>
                    <div className="errors">{this.state.error ? this.state.error.message: ''}</div>
                </form>
            </div>
        );
    }
}

function validate(values) {
    let errors = {};
    // Validate the inputs from 'values'
    if (!values.title) {
        errors.title = "Enter a title!";
    }
    if (!values.content) {
        errors.content = "Enter content!";
    }
    return errors;
}

const mapStateToProps = (state) => {
    return {
        firebase: state.firebase
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addQuestion: (title, content) => dispatch({ 
            type: "ADD_QUESTION", 
            title: title, 
            content: content 
        })
    };
};

export default reduxForm({
    validate: validate,
    form: 'QuestionAddForm' //this has to be unique
})(
    connect(mapStateToProps, mapDispatchToProps)(QuestionAddForm)
);