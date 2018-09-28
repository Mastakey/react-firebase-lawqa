import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class RegisterForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: {}
        }
    }
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

    handleErrors(error) {
        console.log("handle error", error);
        //this.setState({
        //    errors: [...this.state.errors, error]
        //});
        this.setState({
            error: error
        })
    }

    onSubmit(values) {
        console.log("submit values", values);
        console.log("props", this.props);
        const firebase = this.props.firebase;
        let that = this;

        firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
        .then(user => {
            console.log("user", user);
            console.log("done");
        })
        .catch(function (error) {
            that.handleErrors(error);
        });
    }

    render() {
        const handleSubmit = this.props.handleSubmit;
        console.log(this.state);
        return (
            <div className="container content-register">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="white">
                    <h5 className="grey-text text-darken-3">Register</h5>
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
                    <Field
                        name="firstName"
                        type="text"
                        label="First Name"
                        component={this.renderField}
                    />
                    <Field
                        name="lastName"
                        type="text"
                        label="Last Name"
                        component={this.renderField}
                    />
                    <div className="input-field">
                        <button type="submit" className="btn pink lighten-1 z-depth-0">Submit</button>
                    </div>
                    <div className="errors">{this.state.error ? this.state.error.message : ''}</div>
                </form>
            </div>
        );
    }
}

function validate(values) {
    //console.log(values) -> {title: '', categories: '', content: ''}
    const errors = {};
    // Validate the inputs from 'values'
    if (!values.title) {
        errors.title = "Enter a title!";
    }
    if (!values.categories) {
        errors.categories = "Enter a category!";
    }
    if (!values.content) {
        errors.content = "Enter content!";
    }

    // If errors is empty, the form is fine to submit
    // If errors has any properties, redux form assumes form is invalid
    return errors;
}

const mapStateToProps = (state) => {
    return {
        firebase: state.firebase
    };
}


export default reduxForm({
    validate: validate,
    form: 'RegisterForm' //this has to be unique
})(
    connect(mapStateToProps, {  })(RegisterForm)
);