import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class LoginForm extends Component {
    renderField(field) {
        //const { touched, error } = field.meta;
        return (
            <div className="md-form">
                <input className="form-control mb-3" type={field.type} id={field.label}
                    {...field.input}
                />
                <label htmlFor={field.label}>{field.label}</label>
                {field.meta.error && field.meta.touched &&
                    <span className="form-error-text">
                        {field.meta.error}
                    </span>
                }
            </div>
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
                        <div className="container">
                            <div className="row flex-center">
                            <div className="cols-md-6">
                                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}  className="border border-light p-5">
                                    <p className="h5 mb-4 text-center">Login</p>
                                    <Field
                                        name="email"
                                        type="email"
                                        label="Email"
                                        icon="envelope"
                                        component={this.renderField}
                                    />
                                    <Field
                                        name="password"
                                        type="password"
                                        label="Password"
                                        icon="lock"
                                        component={this.renderField}
                                    />
                                    <button className="btn btn-info btn-block my-4" type="submit">Login</button>
                                    
                                    <div className="errors">{this.props.authError ? this.props.authError.message : ''}</div>
                                </form>
                            </div>
                            </div>
                        </div>
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