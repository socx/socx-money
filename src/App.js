import React, { Component } from 'react';
import Contacts from './components/contacts';
import {
  QA_API_BASE, LOCAL_API_BASE, CONTACTS_ENDPOINT
} from './constants/endpoints'

const CONTACT_ENDPOINT =  `${QA_API_BASE}${CONTACTS_ENDPOINT}` ||
  `${LOCAL_API_BASE}${CONTACTS_ENDPOINT}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isLoading: false
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // state = {
  //   contacts: [],
  //   isLoading: false
  // }
  handleClick() {
    this.setState({ isLoading: true });
    fetch(CONTACT_ENDPOINT)
    .then(res => res.json())
    .then((response) => {
      this.setState({
        contacts: response.data,
        isLoading: false
      })
    })
    .catch(console.log)
  } 
  render() {
    return (
      <div>
        <p>
          <button onClick={this.handleClick}>
            Click me
          </button>
        </p>
        <p>
          <span className={this.state.isLoading ? '' : 'd-none'}>Loading...</span>
          {this.state.contacts && this.state.contacts.length &&
            <Contacts contacts={this.state.contacts} />
          }
          {/* {(!this.state.contacts || !this.state.contacts.length) &&
            <span>no contacts</span>
          } */}
        </p>
      </div>
      
    )
  }
}

export default App;
