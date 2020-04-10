import React from 'react';
import {
  MDBEdgeHeader
} from 'mdbreact';
import './styles.css';

class AboutUs extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <MDBEdgeHeader color='indigo darken-3' className='sectionPage' /> 
        <h1>About Us</h1>
      </>
    );
  }
}

export default AboutUs;
