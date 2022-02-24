import React, { Component } from "react";
import Contacts from './Contacts'
import { Container, Header } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: 1, firstName: 'Jeffery', phone: '801-121-5656',},
      { id: 2, firstName: 'George', phone: '801-121-5656',},
      { id: 3, firstName: 'Ringo', phone: '801-121-5656',},
    ],
  }




  render() {
    return (
      <div>
        <h1>React Contact List</h1>
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
