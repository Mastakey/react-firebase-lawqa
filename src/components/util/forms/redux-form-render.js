import React from 'react';



export const createRenderer = (render) => ({ input, meta, label, ...rest }) => {
    return (
        <div className="md-form">
            {render(input, label, rest)}
            {rest && rest.type !== 'textarea' ? 
                <label htmlFor={input.name} id={input.name}>{label}</label>
                : null
            }
            {meta.error && meta.touched &&
                <span className="form-error-text">
                    {meta.error}
                </span>
            }
        </div>
    );
}

export const RenderInput = createRenderer((input, label, rest) => {
    return (
        <input className="form-control mb-3" {...input} type={rest.type} />
    );
});

export const RenderTextarea = createRenderer((input, label, rest) => {
    return (
        <div className="form-group shadow-textarea">
            <textarea className="form-control z-depth-1" {...input} rows="3"
            placeholder={label}></textarea>
        </div>
    );
});

export const RenderSelect = createRenderer((input, label, { children }) => {
    return (
        <select className="mdb-select colorful-select dropdown-primary" {...input} searchable="Search here..">
            {children}
        </select>
    );
});

export const RenderSelectMultiple = createRenderer((input, label, { children }) => {
    return (
        <select className="mdb-select md-form" {...input}>
            {children}
        </select>
    );
});