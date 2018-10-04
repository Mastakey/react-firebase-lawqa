import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

class RegisterForm extends Component {
    renderField(field) {
        //const { touched, error } = field.meta;
        const className = "form-input";
        return (
            <FormGroup className={className}>
                <Label for={field.name}>{field.label}</Label>
                <Input type={field.type} id={field.name} 
                {...field.input}
                />
                {field.meta.error && field.meta.touched &&
                    <span className="form-error-text">
                        {field.meta.error}
                    </span>
                }
            </FormGroup>
        );
    }

    onSubmit(values) {
        console.log("submit values", values);
        console.log("props", this.props);
        this.props.register(values.email, values.password);
    }

    render() {
        const handleSubmit = this.props.handleSubmit;
        return (
            <div className="main-container">
                <div className="main-content-container">
                    <div className="main-content">
                        <div className="form-container">
                            <Form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="register">
                                <h5 className="form-header">Register</h5>
                                <Row><Col md={12}>
                                <Field 
                                    name="email"
                                    type="email"
                                    label="Email"
                                    component={this.renderField}
                                />
                                </Col></Row>
                                <Row><Col md={12}>
                                <Field
                                    name="password"
                                    type="password"
                                    label="Password"
                                    component={this.renderField}
                                />
                                </Col></Row>
                                <Row><Col md={6}>
                                <Field
                                    name="firstName"
                                    type="text"
                                    label="First Name"
                                    component={this.renderField}
                                />
                                </Col>
                                <Col md={6}>
                                <Field
                                    name="lastName"
                                    type="text"
                                    label="Last Name"
                                    component={this.renderField}
                                />
                                </Col></Row>
                                <div className="input-field">
                                    <Button>Submit</Button>
                                </div>
                                <div className="errors">{this.props.error ? this.props.error.message : ''}</div>
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
    if (!values.email) {
        errors.email = "Email is empty";
    }
    if (!values.password) {
        errors.password = "Password is empty";
    }
    return errors;
}

const mapStateToProps = (state) => {
    return {
        error: state.auth.error,
        isAuthenticated: state.auth.isAuthenticated,
        redirect: state.auth.redirect
    };
}

const mapDispatchToProps = dispatch => {
    return {
        register: (email, password) => dispatch({ type: "REGISTER", email, password }),
    };
};


export default reduxForm({
    validate: validate,
    form: 'RegisterForm' //this has to be unique
})(
    connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
);