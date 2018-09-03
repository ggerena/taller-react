import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';

import Persona from '../components/Persona/Persona';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      mostrarLista: false,
      personas: [
        {name: 'Juan', age: 25},
        {name: 'Pedro', age: 28},
        {name: 'Alfredo', age: 31},
      ],
    }
  }

  onClick = () => {
    console.log('hola soy un click de persona');
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenidos a React</h1>
        </header>
        <h1 onClick={this.onClickMostrar}>Mostrar personas</h1>
        {personas}
      </div>
    );
  }

}

export default App;
