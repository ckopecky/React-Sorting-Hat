import React from 'react';
import PropTypes from 'prop-types';
import AnswerOption from "./AnswerOptions";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import "./SortingHat.css";

const SortingHat = props => {
    const renderAnswerOptions = key => {
        return (
            <AnswerOption
            key={key.input}
            answerContent={key.input}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
          />
        );
    };
    return (
        <div className="sorting_hat_container">
            <div className="quiz_container">
            <QuestionCount
                questionId={props.questionId}
                total={props.questionTotal}
            />
            <Question       content={props.question} />
            <ul className="answerOptions">
            {props.answerOptions.map(renderAnswerOptions)}
            </ul>
            </div>
        </div>
    );
};

SortingHat.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };


export default SortingHat;