import React from 'react';
import PropTypes from 'prop-types';

const QuestionCount = props => {
    return (
        <div className="questionCount">
            Question <span id="counters">{props.questionId}</span> of <span>{props.total}</span>
        </div>
    );
};

QuestionCount.propTypes = {
    questionId: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default QuestionCount;