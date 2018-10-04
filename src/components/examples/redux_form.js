import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import isValidEmail from 'sane-email-validation';

class ReduxFormExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {}
        }
    }

    renderInput = ({input, meta, label}) => {
        return (
            <div>
                <pre>
                    {JSON.stringify(meta)}
                </pre>
                <label>{label}</label>
                <input {...input} placeholder={label} />
                {meta.error && meta.touched &&
                    <span>
                        {meta.error}
                    </span>
                }
            </div>
        );

    }

    onSubmit(){

    }

    render() {
        const handleSubmit = this.props.handleSubmit;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div>
                    <Field label="First Name" name="firstName" component={this.renderInput} />
                    <Field label="Last Name" name="lastName" component={this.renderInput} />
                    <Field label="email" name="email" component={this.renderInput} />
                    <Field label="Province" name="province" component={this.renderInput} />
                </div>
                <button type="submit">Submit</button>

            </form>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    }
    if (!values.lastName) {
        errors.lastName = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!isValidEmail(values.email)) {
        errors.email = "Invalid Email";
    }
    return errors;
}



export default reduxForm({
    validate: validate,
    form: 'ReduxFormExample' //this has to be unique
})(
    connect(null, {})(ReduxFormExample)
);