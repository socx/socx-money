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
import { THEME } from 'constants/common';

import './styles.css'

const ForgotPassword = props => {
  return (
    <MDBContainer className='mt-3 text-center'>
      <MDBEdgeHeader color='white' className="reduced" />
      <MDBFreeBird>
        <MDBRow>
          <MDBCol md='8' lg='7' className='mx-auto float-none white z-depth-1 py-2 px-2'>
            <MDBCardBody>
              <MDBCardTitle>Forgot Password</MDBCardTitle>
              <p className='pb-4'>Don’t worry. It will take just a moment to reset.</p>
              <form className='text-left'>
                <MDBInput label='Your email' group type='email' icon='envelope' />
                <div className='text-center'>
                  <MDBBtn color={THEME}>Reset Password</MDBBtn>
                </div>
              </form>
              <div className='my-2'>
                <p style={{ fontWeight: '300', fontSize: '0.75rem' }}>
                  Remember your password? <a href='/login'>Login</a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBFreeBird>
    </MDBContainer>
  );
};

export default ForgotPassword;
