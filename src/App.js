import React, { Component } from 'react';
import Contacts from './components/contacts';
import {
  QA_API_BASE, LOCAL_API_BASE, CONTACTS_ENDPOINT
} from './constants/endpoints'

const CONTACT_ENDPOINT =  `${QA_API_BASE}${CONTACTS_ENDPOINT}` ||
  `${LOCAL_API_BASE}${CONTACTS_ENDPOINT}`;

class App extends Component {
  state = {
    contacts: []
  }
  componentDidMount() {
    fetch(CONTACT_ENDPOINT)
    .then(res => res.json())
    .then((response) => {
      this.setState({ contacts: response.data })
    })
    .catch(console.log)
  } 
  render() {
    return (
      <div>
        {this.state.contacts && this.state.contacts.length &&
          <Contacts contacts={this.state.contacts} />
        }
        {(!this.state.contacts || !this.state.contacts.length) &&
          <p>no contacts</p>
        }
      </div>
      
    )
  }
}

export default App;



// import React, { Component } from 'react';
// import Contacts from './components/contacts';

// const CONTACT_ENDPOINT = `https://my-money.herokuapp.com/api/countries` ||
//   'http://localhost:3008/api/contacts';

// class App extends Component {
//   state = {
//     contacts: []
//   }
//   componentDidMount() {
//     fetch(CONTACT_ENDPOINT)
//     .then(res => res.json())
//     .then((response) => {
//       this.setState({ contacts: response.data })
//     })
//     .catch(console.log)
//   } 
//   render() {
//     return (
//       <div>
//         {this.state.contacts && this.state.contacts.length &&
//           <Contacts contacts={this.state.contacts} />
//         }
//         {!this.state.contacts || !}
//       </div>
      
//     )
//   }
// }

// export default App;
