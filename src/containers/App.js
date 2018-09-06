import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import axios from 'axios';

import Persona from '../components/Persona/Persona';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      mostrarLista: true,
      personas: [
        // {name: 'Juan', age: 25},
        // {name: 'Pedro', age: 28},
        // {name: 'Alfredo', age: 31},
      ],
    }
  }

  getPersonas = () => {
    axios.get('http://localhost:3000/users/')
      .then(response => {
        this.setState({personas: response.data});
      });
  }

  componentDidMount(){
    this.getPersonas();
  }

  postDataHandler = () => {
    const data = {
      'name': 'Carlos',
      'age': 30
    }
    axios.post('http://localhost:3000/users/', data)
      .then(response => {
        console.log(response);
        this.getPersonas();
      });
  }
 
  onClick = (id) => {
    console.log(id);
    axios.delete('http://localhost:3000/users/' + id)
      .then(response => {
        this.getPersonas();
      });
  }

  onClickMostrar = () => {
    this.setState({mostrarLista: !this.state.mostrarLista});
  }

  render() {

    let personas = null;
    if (this.state.mostrarLista) {
      personas = (
        this.state.personas.map((item, index) =>
          <Persona
            key={index}
            humano={item}
            click={this.onClick} />
        )
      );
    }

    return (
      <div className="App" style={{align: 'left'}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenidos a React</h1>
        </header>
        <button onClick={this.postDataHandler}>Agregar Carlos</button>
        <h1 onClick={this.onClickMostrar}>Cantidad de personas : {this.state.personas.length}</h1>
        {personas}
      </div>
    );
  }

}

export default App;
