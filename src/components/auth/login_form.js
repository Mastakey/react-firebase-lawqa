import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class LoginForm extends Component {
    renderField(field) {
        const { touched, error } = field.meta;
        const className = "input-field";
        return (
            <div className={className}>
                <label htmlFor={field.name}>{field.label}</label>
                <input type={field.type} id={field.name}
                    {...field.input}
                />
            </div>
        );
    }

    onSubmit(values) {
        console.log("submit values", values);
    }
    render() {
        const handleSubmit = this.props.handleSubmit;
        return (
            <div className="login-container">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="white">
                    <h5 className="grey-text text-darken-3">Login</h5>
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
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'LoginForm' //this has to be unique
})(
    connect(null, {})(LoginForm)
);