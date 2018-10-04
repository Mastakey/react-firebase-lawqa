import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import isValidEmail from 'sane-email-validation';

const provinces = [
    "Ontario",
    "Quebec"
]

const createRenderer = (render) => ({input, meta, label, ...rest}) => {
    return (
        <div className="input-field">
            <pre>
                {JSON.stringify(meta)}
            </pre>
            <label>{label}</label>
            {render(input, label, rest)}
            {meta.error && meta.touched &&
                <span>
                    {meta.error}
                </span>
            }
        </div>
    );
}

const RenderInput = createRenderer((input, label) => {
    return (
        <input {...input} placeholder={label} />
    );
});

const RenderSelect = createRenderer((input, label, {children}) => {
    return (
        <select className="browser-default" {...input}>
            {children}
        </select>
    );
});

class ReduxFormExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {}
        }
    }

    onSubmit(){

    }

    render() {
        const handleSubmit = this.props.handleSubmit;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div>
                    <Field label="First Name" name="firstName" component={RenderInput} />
                    <Field label="Last Name" name="lastName" component={RenderInput} />
                    <Field label="email" name="email" component={RenderInput} />
                    <Field label="Province" name="province" component={RenderSelect}>
                    <option />
                        {provinces.map(province => 
                            <option key={province} value={province}>
                                {province}
                            </option>
                        )}
                    </Field>
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
    if (!values.province) {
        errors.province = 'Required';
    }
    return errors;
}



export default reduxForm({
    validate: validate,
    form: 'ReduxFormExample' //this has to be unique
})(
    connect(null, {})(ReduxFormExample)
);