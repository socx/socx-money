import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  MDBFreeBird,
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdbreact';
import './styles.css';
import { THEME } from 'constants/common';
import Landmark from 'components/landmark';
import RateCalculator from 'components/rateCalculator';
import {
  destinationAmountChanged,
  destinationCurrencyChanged,
  sourceAmountChanged,
  sourceCurrencyChanged,
  getCurrencies
} from './actions';

class Welcome extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  componentDidMount () {
    this.props.getCurrencies();
  }

  render() {
    const props = this.props;

    return (
      <>
        <Landmark />
        <div className='mt-0 mb-0'>
          <MDBFreeBird>
            <RateCalculator 
              theme={THEME}
              rate={props.rate}
              fees={props.fees}
              sourceCurrencies={props.sourceCurrencies}
              sourceCurrency={props.sourceCurrency}
              sourceCurrencyChanged={props.sourceCurrencyChanged}
              sourceAmount={props.sourceAmount}
              sourceAmountChanged={props.sourceAmountChanged}
              destinationCurrencies={props.destinationCurrencies}
              destinationCurrency={props.destinationCurrency}
              destinationCurrencyChanged={props.destinationCurrencyChanged}
              destinationAmount={props.destinationAmount}
              destinationAmountChanged={props.destinationAmountChanged}
            />
          </MDBFreeBird>
          <MDBContainer className='text-center'>
            <MDBRow>
              <MDBCol md='12'>
                <h2 className='text-center my-5 font-weight-bold'>
                  Why is it so great?
                </h2>
                <p className='text-center text-muted mb-1'>
                  We make international money transfers easier than ever.
                  Choose how and when you send, with great exchange rates and low fees.
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

const mapStateToProps = state => ({
  rate: state.welcome.rate,
  fees: state.welcome.fees,
  sourceCurrencies: state.welcome.sourceCurrencies,
  sourceAmount: state.welcome.sourceAmount,
  sourceCurrency: state.welcome.sourceCurrency,
  destinationCurrencies: state.welcome.destinationCurrencies,
  destinationAmount: state.welcome.destinationAmount,
  destinationCurrency: state.welcome.destinationCurrency,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  sourceAmountChanged,
  sourceCurrencyChanged,
  destinationAmountChanged,
  destinationCurrencyChanged,
  getCurrencies
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome)