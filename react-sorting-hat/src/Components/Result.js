import React from 'react';
import PropTypes from 'prop-types';
import Gryffindor from "../images/gryffindor.png";
import Slytherin from "../images/slytherin.png";
import Hufflepuff from "../images/hufflepuff.png";
import Ravenclaw from "../images/ravenclaw.png";
import "./Result.css";

const Result = props => {
    console.log(props.quizResult)
    if(props.quizResult ==="Gryffindor") {
        return (
            <div className="results-container-crest">
                <img className="house-crest" src={Gryffindor}alt="Gryffindor"/>
                <div className="sorted">
                    You've been sorted into <span>{props.quizResult}</span>
                </div>
            </div>
        )
    } 
    else if(props.quizResult ==="Slytherin") {
        return (
            <div className="results-container-crest">
                <img className="house-crest" src={Slytherin}alt="Slytherin"/>
                <div className="sorted">
                    You've been sorted into <span>{props.quizResult}</span>
                </div>
            </div>
        )
    }
    else if(props.quizResult ==="Ravenclaw") {
        return (
            <div className="results-container-crest">
                <img className = "house-crest" src={Ravenclaw}alt="Ravenclaw"/>
                <div className="sorted">
                    You've been sorted into <span>{props.quizResult}</span>
                </div>
            </div>
        )
    }
    else {

        return (
            <div className="results-container-crest">
                <img className="house-crest" src={Hufflepuff}alt="Hufflepuff"/>
                <div className="sorted">
                    You've been sorted into <span>{props.quizResult}</span>
                </div>
            </div>
        )
    }
};

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,

};

export default Result;