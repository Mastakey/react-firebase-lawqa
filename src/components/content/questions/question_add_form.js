import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

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
        const className = "form-input";
        let jsxField = null;
        let jsxFieldInput = (
            <Input type={field.type} id={field.name}
                {...field.input}
            />
        );
        /*
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
        */
        return (
            <FormGroup className={className}>
                <Label htmlFor={field.name}>{field.label}</Label>
                {jsxFieldInput}
                {field.meta.error && field.meta.touched &&
                    <span className="form-error-text">
                        {field.meta.error}
                    </span>
                }
            </FormGroup>
        );
    }

    componentDidUpdate() {
        console.log("comp update", this.props);
        if (this.props.addStatus) {
            this.props.history.push('/questions');
        }
    }

    onSubmit(values) {
        console.log(values);
        this.props.addQuestion(values.title, values.content);
    }
    render() {
        const handleSubmit = this.props.handleSubmit;
        return (
            <div className="main-container">
            <div className="main-content-container">
                <div className="main-content">
                    <div className="form-container">
                        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="addquestion">
                            <h5 className="grey-text text-darken-3">Add Question</h5>
                            <Row><Col md={12}>
                            <Field
                                name="title"
                                type="text"
                                label="Title"
                                component={this.renderField}
                            />
                            </Col></Row>
                            <Row><Col md={12}>
                            <Field
                                name="content"
                                type="textarea"
                                label="Details"
                                component={this.renderField}
                            />
                            </Col></Row>
                            <Button className="btn pink lighten-1 z-depth-0">Post</Button>
                            <div className="errors">{this.state.error ? this.state.error.message : ''}</div>
                        </Form>
                    </div>
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
        errors.title = "Enter a title!";
    }
    if (!values.content) {
        errors.content = "Enter content!";
    }
    return errors;
}

const mapStateToProps = (state) => {
    return {
        firebase: state.firebase,
        addStatus: state.questions.addStatus
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