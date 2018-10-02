import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class LoginForm extends Component {
    renderField(field) {
        //const { touched, error } = field.meta;
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
        console.log(this.props);
        console.log("submit values", values);
        this.props.login(values.email, values.password);
        /*firebase.auth().signInWithEmailAndPassword()
        .then((user) => {
            console.log("user", user);
            console.log("done");
            this.props.history.push('/');
        }).catch(function(error) {
            that.handleErrors(error);
        });*/
    }

    componentDidUpdate(){
        if (this.props.isAuthenticated && this.props.redirect) {
            this.props.history.push('/');
        }
    }

    render() {
        const handleSubmit = this.props.handleSubmit;
        console.log(this.props);
        return (
            <div className="container content-login">
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
                    <div className="errors">{this.props.error ? this.props.error.message : ''}</div>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
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
        login: (email, password) => dispatch({ type: "LOGIN", email, password })
    };
};

export default reduxForm({
    validate: validate,
    form: 'LoginForm' //this has to be unique
})(
    connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);