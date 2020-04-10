import React from 'react';
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink
} from 'mdbreact';
import './styles.css';
import { THEME } from '../../constants/common';

class Welcome extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <MDBEdgeHeader color={THEME} className='sectionPage' />
        <div className='mt-3 mb-5'>
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md='10'
                className='mx-auto float-none white z-depth-1 py-2 px-2'
              >
                <MDBCardBody className='text-center'>
                  <h2 className='h2-responsive mb-4'>
                    <strong className='font-weight-bold'>
                      <img
                        src='https://mdbootstrap.com/img/Marketing/other/logo/logo-mdb-react-small.png'
                        alt='mdbreact-logo'
                        className='pr-2'
                      />
                      Welcome Page
                    </strong>
                  </h2>
                  <MDBRow />
                  <p>React Bootstrap with Material Design</p>
                  <MDBRow className='d-flex flex-row justify-content-center row'>
                    <a
                      className='border nav-link border-light rounded mr-1 mx-2 mb-2'
                      href='https://mdbootstrap.com/react/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <MDBIcon icon='graduation-cap' className='mr-2' />
                      <span className='font-weight-bold'>
                        Official Documentation
                      </span>
                    </a>
                    <a
                      className='border nav-link border-light rounded mx-2 mb-2'
                      href='https://mdbootstrap.com/products/react-ui-kit/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <MDBIcon far icon='gem' className='mr-2' />
                      <span className='font-weight-bold'>PRO</span>
                    </a>
                    <a
                      className='border nav-link border-light rounded mx-2 mb-2'
                      href='https://mdbootstrap.com/docs/react/getting-started/download/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <MDBIcon icon='download' className='mr-2' />
                      <span className='font-weight-bold'>FREE</span>
                    </a>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
          <MDBContainer className='text-center'>
            <MDBRow>
              <MDBCol md='12' className='mt-4'>
                <h2 className='text-center my-5 font-weight-bold'>
                  Why is it so great?
                </h2>
                <p className='text-center text-muted mb-1'>
                  We make international money transfers easier than ever.
                  Choose how and when you send, with great exchange rates and low fees.
                </p>
                <p className='text-center text-muted mb-1'>
                  {/* Twitter has created a Bootstrap to support you in faster and
                  easier development of responsive and effective websites. */}
                </p>
                <p className='text-center text-muted'>
                  {/* We present you a framework containing the best features of
                  both of them - Material Design for Bootstrap. */}
                </p>
                <hr className='my-3' />
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="text-center">
            <MDBRow id='categories'>
              <MDBCol md='4' className='my-5'>
                <i className="fa fa-tachometer-alt fa-4x orange-text"></i>
                <h4 className="my-4 font-weight-bold">Speedy Service</h4>
                <p>
                We get your funds to destination within minutes.
                </p>
              </MDBCol>
              <MDBCol md='4' className='my-5'>
                <i className="fa fa-lock fa-4x orange-text"></i>
                <h4 className="my-4 font-weight-bold">Security</h4>
                <p>
                We are fully FCA authorised. We use industry-standard security protocols and encryption.
                </p>
              </MDBCol>
              <MDBCol md='4' className='my-5'>
                <i className="fa fa-american-sign-language-interpreting fa-4x orange-text"></i>
                <h4 className="my-4 font-weight-bold">Simplicity</h4>
                <p>
                  Signup and send your first transfer in minutes.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>


          <div className='how-section'>
            <MDBContainer>
              
              <MDBRow>
                <MDBCol md="12" className="mx-auto mt-2">
                  <h2 className="text-center mt-4 semi-bold-text">
                    As Simple As 1-2-3
                  </h2>
                  <p className="text-center">
                    Sending money abroad is literary this easy.
                  </p>
                  <MDBRow >
                    <MDBCol md="4" className="mb-2">
                      <MDBCol size="12" className="float-right3 text-center">
                        <h3 className="text-center simple-number">1</h3>
                        <h4 className="simple-text semi-bold-text">
                          Sign Up
                        </h4>
                        <p className="simple-sub-text">
                          Sign up for a free accout in minutes
                        </p>
                      </MDBCol>
                    </MDBCol>
                    <MDBCol md="4" className="mb-2">
                      <MDBCol size="12" className="float-right2 text-center">
                        <h3 className="text-center simple-number">2</h3>
                        <h4 className="simple-text semi-bold-text">
                          Send directly to banks
                        </h4>
                        <p className="simple-sub-text">
                        The recipient gets money in their currency directly from our local partner's bank account.
                        </p>
                      </MDBCol>
                    </MDBCol>
                    <MDBCol md="4" className="mb-2">
                      <MDBCol size="12" className="float-right2 text-center">
                        <h3 className="text-center simple-number">3</h3>
                        <h4 className="simple-text semi-bold-text">
                          Funds received promptly.
                        </h4>
                        <p className="simple-sub-text">
                          Receive instant updates, so you always know where your money is
                        </p>
                      </MDBCol>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>

            </MDBContainer>
          </div>

          <div className='customer-support-section'>
            <MDBContainer >
              <MDBRow>
                <MDBCol md='12' className='my-5'>
                  <div className='white-opaque-bg p-2'>
                    <h2 className="text-center black-text">Awesome Customer Support</h2>
                    <p className="text-center black-text">Do you have any queries? Not to worry. We have great people ready to help you with whatever you need.</p>
                    <p className="text-center">
                      <MDBBtn outline color="black" href='/support'>
                        Find out more
                      </MDBBtn>
                    </p>
                  </div>
                </MDBCol>

              </MDBRow>
            </MDBContainer>
          </div>
            

        </div>
      </>
    );
  }
}

export default Welcome;
