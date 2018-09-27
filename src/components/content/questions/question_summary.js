import React from 'react';

const QuestionSummary = ({question}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{question.title}</span>
                <p>Posted by Net Ninja</p>
                <p className="grey-text">September 25, 2018</p>
            </div>
        </div>
    )
}

export default QuestionSummary;