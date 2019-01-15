import React, { Component } from 'react';
import { quiz } from './images/questions';
import Result from './Components/Result';
import SortingHat from './Components/SortingHat';
import "./Components/Result.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Slytherin: 0,
        Ravenclaw: 0,
        Gryffindor: 0,
        Hufflepuff: 0
      },
      result: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {

    this.setState({
      question: quiz[0].question,
      answerOptions: quiz[0].answers
    })
  }


  setUserAnswer(answer) {
    this.setState(() => ({
      answersCount: {
        ...this.state.answersCount,
        [answer]: this.state.answersCount[answer] + 1 || 1
      },
      answer: answer
    }));
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.target.value);
    if(this.state.questionId < quiz.length) {
      setTimeout(() => 
        this.setNextQuestion(), 300
      )
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);

    }
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quiz[counter].question,
      answerOptions: quiz[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    console.log(answersCountValues);
    console.log(answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount));
    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults (result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: result[Math.random * result.length] });
    }
  }

  renderSortingHat() {
    return (
      <SortingHat
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quiz.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <div className="results-container">
        <Result quizResult={this.state.result} />
      </div>
    );
  }


  render() {
    return (
      <div className="App">
          {this.state.result ? this.renderResult() : this.renderSortingHat()}

      </div>
    );
  }
}

export default App;
