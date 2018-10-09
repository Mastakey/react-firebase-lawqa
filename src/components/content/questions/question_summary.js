import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'mdbreact';

const QuestionSummary = ({question}) => {
    console.log(question);
    const questionLink = `/questions/${question.id}`;
    return (
        <Card className="question-card">
            <CardBody>
                <Link to={questionLink} ><CardTitle>{question.title}</CardTitle></Link>
                <CardText>{question.city}</CardText>
            </CardBody>
        </Card>
    )
}

export default QuestionSummary;