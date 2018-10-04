import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const QuestionSummary = ({question}) => {
    return (
        <Card className="question-card">
            <CardBody>
                <CardTitle>{question.title}</CardTitle>
                <CardSubtitle>{question.author}</CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default QuestionSummary;