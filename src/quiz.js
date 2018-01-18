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

class Quiz extends React.Component{

  constructor(props){
    super(props);

  }

  get people() {
    //truFrends.map(friend => )
    return(
      <div>
      lol
      <div>
    )
  }

  render() {
    return(
      <h1>Quiz</h1>
      <h2>{this.people}</h2>
    )
  }
}

export default Quiz;
