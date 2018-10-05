import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class RegisterForm extends Component {
    renderField(field) {
        //const { touched, error } = field.meta;
        const className = "md-form";
        return (
            <div className={className}>
                
                <input className="form-control mb-3" type={field.type} id={field.input.name} 
                    {...field.input}
                />
                <label htmlFor={field.input.name}>{field.label}</label>
                {field.meta.error && field.meta.touched &&
                    <span className="form-error-text">
                        {field.meta.error}
                    </span>
                }
            </div>
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
            <div className="main-content-container">
                <div className="main-content">
                    <div className="form-container">
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="border border-light p-5">
                            <p className="h5 mb-4 text-center">Register</p>
                            <div className="form-row mb-4">
                                <div className="col">
                                    <Field
                                        name="firstName"
                                        type="text"
                                        label="First Name"
                                        component={this.renderField}
                                    />
                                </div>
                                <div className="col">
                                    <Field
                                        name="lastName"
                                        type="text"
                                        label="Last Name"
                                        component={this.renderField}
                                    />
                                </div>
                            </div>
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

                            <div className="input-field">
                                <button type="submit" className="btn btn-info btn-block my-4">Submit</button>
                            </div>
                            <div className="errors">{this.props.error ? this.props.error.message : ''}</div>
                        </form>
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
        error: state.auth.error.register,
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