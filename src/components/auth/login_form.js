import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class LoginForm extends Component {
    renderField(field) {
        //const { touched, error } = field.meta;
        const className = "form-input";
        return (
            <FormGroup>
                <Label for={field.name}>{field.label}</Label>
                <Input className={className} type={field.type} id={field.name}
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
        console.log(this.props);
        console.log("submit values", values);
        this.props.login(values.email, values.password);
    }

    componentDidUpdate(){
        if (this.props.isAuthenticated && this.props.redirect) {
            this.props.history.push('/');
        }
    }

    render() {
        const handleSubmit = this.props.handleSubmit;
        console.log("prop", this.props);

        return (
            <div className="main-container">
                <div className="main-content-container">
                    <div className="main-content">
                        <div className="form-container">
                            <Form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="login">
                                <h5 className="form-header">Login</h5>
                                <Field
                                    name="email"
                                    type="email"
                                    label="Email"
                                    component={this.renderField}
                                />
                                <Field
                                    name="password"
                                    type="password"
                                    label="Password"
                                    component={this.renderField}
                                />
                                <Button>Submit</Button>
                                
                                <div className="errors">{this.props.authError ? this.props.authError.message : ''}</div>
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
        authError: state.auth.error,
        isAuthenticated: state.auth.isAuthenticated,
        redirect: state.auth.redirect
    };
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch({ type: "LOGIN", email, password })
    };
};

export default reduxForm({
    validate: validate,
    form: 'LoginForm' //this has to be unique
})(
    connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);