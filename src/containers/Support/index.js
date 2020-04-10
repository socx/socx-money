import React from 'react';
import {
  MDBEdgeHeader
} from 'mdbreact';
import './styles.css';

class Support extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <MDBEdgeHeader color='indigo darken-3' className='sectionPage' /> 
        <h1>Support</h1>
      </>
    );
  }
}

export default Support;
