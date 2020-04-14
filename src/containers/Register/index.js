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

import './styles.css';
import { THEME } from 'constants/common';

const Register = props => {
  return (
    <MDBContainer className='mt-3 text-center'>
      <MDBEdgeHeader color='white' className="reduced" />
      <MDBFreeBird>
        <MDBRow>
          <MDBCol md='8' lg='7' className='mx-auto float-none white z-depth-1 py-2 px-2'>
            <MDBCardBody>
              <MDBCardTitle>Register</MDBCardTitle>
              <p className='pb-4'>Already registered? <a href='/login'>Login</a></p>
              <form className="text-left">
                <MDBInput
                  label='Your name'
                  icon='user'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  label='Your email'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  label='Confirm your email'
                  icon='exclamation-triangle'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  label='Your password'
                  icon='lock'
                  group
                  type='password'
                  validate
                />
                <div className='text-center'>
                  <MDBBtn color={THEME}>Register</MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBFreeBird>
    </MDBContainer>
  );
};

export default Register;
