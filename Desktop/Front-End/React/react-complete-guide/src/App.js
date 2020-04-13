import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {id: 'asdasd' ,name: 'Tri', age: 21},
      {id: 'zxfxzv' ,name: 'Anh', age: 20},
      {id: 'asfqgq' ,name: 'Phuc', age: 26}
    ],
    ShowPerson: false
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons : persons });
  }
   
  togglePersonHandler = () => {
    const doesShow = this.state.ShowPerson;
    this.setState({ShowPerson: !doesShow});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons});
  }

  render(){
    let persons = null;

    if (this.state.ShowPerson) {  
      persons = (
        <div>
          {this.state.persons.map( (person,index) => {
            return (  <Person 
              click = {() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age} 
              key = {person.id} 
              change = {(e) => this.nameChangedHandler(e, person.id)} />
            );
          })}
        </div> 
      );
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }  
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>I'm a React app</h1>
          <p className = {classes.join(' ')} > This is really working</p>
          <button className = 'button' onClick={this.togglePersonHandler}> Render Name </button>
          {persons}
        </div>
    );
  } 
}

export default App;



