import React from 'react';

const trueFriends = [
  {id: 1, name: 'Johan', img: 'http://google.se'},
  {id: 2, name: 'Sofie', img: 'http://google.se'},
  {id: 3, name: 'Lovisa', img: 'http://google.se'},
  {id: 4, name: 'Fredrik', img: 'http://google.se'},
  {id: 5, name: 'Atif', img: 'http://google.se'},
  {id: 6, name: 'Mårten', img: 'http://google.se'},
  {id: 7, name: 'Daniel S', img: 'http://google.se'},
  {id: 8, name: 'Daniel C', img: 'http://google.se'},
  {id: 9, name: 'Isak', img: 'http://google.se'}
];

const questionsAndAnswers = [
  {question: 'lorem ipsum dolor sit amet?', friendId: 1 },
  {question: '2 lorem ipsum dolor sit amet?', friendId: 2 },
  {question: '3 lorem ipsum dolor sit amet?', friendId: 4 },
  {question: '4 lorem ipsum dolor sit amet?', friendId: 5 },
  {question: '5 lorem ipsum dolor sit amet?', friendId: 1 },
  {question: '6 lorem ipsum dolor sit amet?', friendId: 9 },
  {question: '7 lorem ipsum dolor sit amet?', friendId: 1 },
  {question: '8 lorem ipsum dolor sit amet?', friendId: 3 },
  {question: '9 lorem ipsum dolor sit amet?', friendId: 6 },
  {question: '10 lorem ipsum dolor sit amet?', friendId: 8 }
];

class Quiz extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      currentQuestion: 0
    }
    this.onClickHandler = this.onClickHandler.bind(this);
    //this.showCurrentQuestion = this.showCurrentQuestion.bind(this);
  }

  onClickHandler(){
    const newQuestion = this.state.currentQuestion + 1;
    if(newQuestion < questionsAndAnswers.length) {
      this.setState({currentQuestion: newQuestion});
    } else {
      this.setState({currentQuestion: 0});
    }
  }

  get people() {
    const friends = trueFriends.map((friend, i) =>
      <li key={'friendID_' + friend.id}>{friend.name}</li>
    );
    return(
      <ul className="friends-list">{friends}</ul>
    );
  }

  render() {

    const currentQuestion = questionsAndAnswers[this.state.currentQuestion];

    return(
      <div className="quiz-wrapper">
        <div className="quiz-question-container">
          <section className="quiz-question-innercontainer">
            <h1>Quiz</h1>
            <h2>{currentQuestion.question}</h2>
          </section>
        </div>
        <div className="quiz-choice-container">
          <section className="quiz-choice-innercontainer">
            {this.people}
            <button onClick={this.onClickHandler}>Nästa fråga</button>
          </section>
        </div>
      </div>
    )
  }
}

export default Quiz;
