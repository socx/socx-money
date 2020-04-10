import React from 'react';
import {
  MDBFreeBird,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBContainer,
  MDBEdgeHeader
} from 'mdbreact';
import { THEME } from '../../constants/common';
import SectionContainer from '../../components/sectionContainer';

import './styles.css'

const Login = props => {
  return (
    <MDBContainer className='mt-3 text-center'>
      <MDBEdgeHeader color='white' className="reduced" />
      <MDBFreeBird>
        <MDBRow>
          <MDBCol md='8' lg='7' className='mx-auto float-none white z-depth-1 py-2 px-2'>
            <MDBCardBody>
              <MDBCardTitle>Welcome back</MDBCardTitle>
              <p className='pb-4'>New to My Money? <a href='/register'>Register</a></p>
              <form className='text-left'>
                <MDBInput label='Your email' group type='email' icon='envelope' />
                <MDBInput label='Your password' group type='password' icon='lock' />
                <div className='text-center'>
                  <MDBBtn color={THEME}>Login</MDBBtn>
                </div>
              </form>
              <div className='my-2'>
                <p style={{ fontWeight: '300', fontSize: '0.75rem' }}>
                  <a href='/forgotPassword'>Forgot password?</a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBFreeBird>
    </MDBContainer>
  );
};

export default Login;
