
import React, { Component, } from 'react';
import './App.css'
import { inject } from 'mobx-react';
import NavBar from './Components/NavBar/NavBar'
import FontAwsome from './Components/FontAwsome'

@inject('ClientStore')
class App extends Component {

  componentDidMount = () => {
    this.props.ClientStore.getClients()
  }

  render() {
    this.componentDidMount()
    return (
      <div>
        <NavBar/>
        <FontAwsome/>
        </div>

    );
  }
}
export default App;