import React, { Component} from 'react';
import {
  MDBBtn,
  MDBCardBody,
  MDBCol,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBRow,
  MDBIcon,
  MDBInputGroup
} from 'mdbreact';
import { formatMoney } from 'helpers/Utils';

class RateCalculator extends Component {
  render() {
    console.log(this.props);
    const { theme, sourceAmount, destinationAmount, sourceAmountChanged, destinationAmountChanged} = this.props;
    return (
      <>
        <MDBRow>
          <MDBCol
            md='7'
            className='mx-auto float-none white z-depth-1'
          >
            <MDBCardBody className='text-center'>
              <h4 className="text-center">
                1 GBP = 450 NGN
                {/* 1 {exchangeRate && exchangeRate.sourceCurrencyCode} = {exchangeRate && formatMoney(exchangeRate.rate)} {exchangeRate && exchangeRate.destinationCurrencyCode} */}
              </h4>
              <hr className="hr-light" />
              <form>
                <div className='form-row'>
                  <div className='col-xs-12 col-md-3 text-left'>
                    You send
                  </div>
                  <div className='col-xs-12 col-md-9'>
                    <MDBInputGroup
                      containerClassName='mb-3'
                      // value={exchangeRate && formatMoney(exchangeRate.sourceAmount)}
                      defaultValue={9}
                      onKeyUp={sourceAmountChanged}
                      ref={sourceAmount}
                      prepend={
                        <MDBDropdown>
                          <MDBDropdownToggle
                            color={theme}
                            size='md'
                            className='m-0 px-3 z-depth-0'
                          >
                            GBP <MDBIcon icon='caret-down' className='ml-1' />
                            {/* {exchangeRate && exchangeRate.sourceCurrencyCode} <MDBIcon icon='caret-down' className='ml-1' /> */}
                          </MDBDropdownToggle>
                          <MDBDropdownMenu color={theme}>
                            <MDBDropdownItem>GBP (Pounds Sterling)</MDBDropdownItem>
                            <MDBDropdownItem>CAD (Canadian Dollars)</MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      }
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='col-xs-12 col-md-3 text-left'>
                    They get
                  </div>
                  <div className='col-xs-12 col-md-9'>
                    <MDBInputGroup
                      containerClassName='mb-3'
                      onKeyUp={destinationAmountChanged}
                      ref={destinationAmount}
                      prepend={
                        <MDBDropdown>
                          <MDBDropdownToggle
                            color={theme}
                            size='md'
                            className='m-0 px-3 z-depth-0'
                          >
                            NGN <MDBIcon icon='caret-down' className='ml-1' />
                            {/* {exchangeRate && exchangeRate.destinationCurrencyCode} <MDBIcon icon='caret-down' className='ml-1' /> */}
                          </MDBDropdownToggle>
                          <MDBDropdownMenu color={theme}>
                            <MDBDropdownItem>GHS (Ghanaian Cedis to Ghana)</MDBDropdownItem>
                            <MDBDropdownItem>KSH (Kenyan Shillings to Kenya)</MDBDropdownItem>
                            <MDBDropdownItem>NGN (Nigerian Naira to Nigeria)</MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      }
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='col-xs-12 col-md-3 text-left'>
                    Fees
                  </div>
                  <div className='col-xs-12 col-md-9 text-left'>
                    £1.99
                  </div>
                </div>
                <div className='form-row'>
                  <div className='col-xs-12 col-md-3 text-left'>
                    
                  </div>
                  <div className='text-center'>
                    <MDBBtn color={theme}>Send</MDBBtn>
                  </div>
                </div>
              </form>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </>
    );
  }
};

export default RateCalculator;
