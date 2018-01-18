import React from 'react';
import { TimelineMax, TweenMax, Elastic } from 'gsap';

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
  {question: 'Vem har voltat med en bil?', friendId: 1 },
  {question: 'Vem har varit en stjärna på minigolf?', friendId: 6 },
  {question: 'Vem har jobbat som bagare?', friendId: 5 },
  {question: 'Vem är känd med låten "Fucka ur"?', friendId: 4 },
  {question: 'Vem fan bor i bagiz?', friendId: 2 },
  {question: '6 lorem ipsum dolor sit amet?', friendId: 9 },
  {question: '7 lorem ipsum dolor sit amet?', friendId: 1 },
  {question: '9 lorem ipsum dolor sit amet?', friendId: 6 },
  {question: '10 lorem ipsum dolor sit amet?', friendId: 8 }
];

class SuccessMessage extends React.Component {
  render() {
    return(
      <div id="WinMessage" className={this.props.show ? "feedback-dialog show" : "feedback-dialog"}>
        <img src="http://www4.pictures.zimbio.com/mp/zgWFptmpEKSl.jpg" />
      </div>
    )
  }
}

class FailMessage extends React.Component{
  render() {
    return(
      <div id="FailMessage" className={this.props.show ? "feedback-dialog show" : "feedback-dialog"}>
        <img src="https://www.askideas.com/media/49/Athlete-Funny-Fail-Meme-Picture.jpg" />
      </div>
    )
  }
}

class Quiz extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      currentQuestion: 0,
      showWinMsg: false,
      showFailMsg: false
    }
    this.onClickHandler = this.onClickHandler.bind(this);
    this.showNextQuestion = this.showNextQuestion.bind(this);
  }

  onClickHandler(element){

    const correctAnswer = element.id === questionsAndAnswers[this.state.currentQuestion].friendId ? true : false;

    if(correctAnswer){
      this.setState({showWinMsg: true});
      this.showNextQuestion();
    } else {
      this.setState({showFailMsg: true});
    }

  }

  showNextQuestion() {
    // Show Next question
    const newQuestion = this.state.currentQuestion + 1;
    if(newQuestion < questionsAndAnswers.length) {
      this.setState({currentQuestion: newQuestion});
    } else {
      this.setState({currentQuestion: 0});
    }

    var tl = new TimelineMax({delay: 1});
    tl
      .from("h2", 0.5, {bottom:-200, autoAlpha:0}, "headline")
      .set(".friends-list", {visibility:"visible"})
      .staggerFrom(".friends-list li", 0.1, {scale:0.9, autoAlpha:0}, 0.075, "headline+=1");

    tl.play();

  }

  get people() {
    const friends = trueFriends.map((friend, index) =>
      <li onClick={() => this.onClickHandler(friend)} key={'friendID_' + friend.id}>{friend.name}</li>
    );
    return(
      <ul className="friends-list">{friends}</ul>
    );
  }

  componentDidMount() {
    var tl = new TimelineMax();
    tl
      .from("h2", 0.5, {bottom:-200, autoAlpha:0}, "headline")
      .set(".friends-list", {visibility:"visible"})
      .staggerFrom(".friends-list li", 0.1, {scale:0.9, autoAlpha:0}, 0.15, "headline+=0.55");

    tl.play();
  }

  componentDidUpdate(nextProps, nextState){

    if(this.state.showWinMsg || this.state.showFailMsg) {

      this.turnOffMessage = setTimeout(() => {
          this.setState({showWinMsg: false, showFailMsg: false});
      }, 1000);

    }

  }

  render() {

    const currentQuestion = questionsAndAnswers[this.state.currentQuestion];

    return(

      <div className="quiz-wrapper">

        <SuccessMessage show={this.state.showWinMsg ? true : false} />
        <FailMessage show={this.state.showFailMsg ? true : false} />

        <div className="quiz-question-container">
          <section className="quiz-question-innercontainer">
            <h1>Känner du dina True Friendz?</h1>
            <h2>{currentQuestion.question}</h2>
          </section>
        </div>
        <div className="quiz-choice-container">
          <section className="quiz-choice-innercontainer">
            {this.people}
          </section>
        </div>
      </div>
    )
  }
}

export default Quiz;
