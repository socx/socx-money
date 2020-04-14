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
    const { 
      theme, sourceCurrencies, destinationCurrencies, rate,
      sourceCurrency, sourceAmount, sourceAmountChanged, sourceCurrencyChanged,
      destinationCurrency, destinationAmount, destinationAmountChanged, destinationCurrencyChanged,
    } = this.props;
    return (
      <>
        <MDBRow>
          <MDBCol
            md='7'
            lg='4'
            className='mx-auto float-none white z-depth-1'
          >
            <MDBCardBody className='text-center'>
              <h4 className="text-center">
                1 {sourceCurrency} =  {formatMoney(rate)} {destinationCurrency}
              </h4>
              <hr className="hr-light" />
              <form>
                <div className='form-row'>
                  <div className='col-xs-12 col-md-12 text-left'>
                    Send
                  </div>
                  <div className='col-xs-12 col-md-12'>
                    <MDBInputGroup
                      value={sourceAmount || ''}
                      onChange={e => sourceAmountChanged(e.target.value)}
                      prepend={
                        <MDBDropdown>
                          <MDBDropdownToggle
                            color={theme}
                            size='md'
                            className='m-0 px-3 z-depth-0'
                          >
                            {sourceCurrency} <MDBIcon icon='caret-down' className='ml-1' />
                          </MDBDropdownToggle>
                          <MDBDropdownMenu color={theme}>
                            {sourceCurrencies.map(function(currency, i){
                              return <MDBDropdownItem
                                  obj={currency.code}
                                  key={i}
                                  onClick={() => sourceCurrencyChanged(currency.code)}
                                  >
                                    {currency.description}
                                </MDBDropdownItem>;
                            })}
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      }
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='col-xs-12 col-md-12 text-left'>
                    Receive
                  </div>
                  <div className='col-xs-12 col-md-12'>
                    <MDBInputGroup
                      value={destinationAmount || ''}
                      onChange={e => destinationAmountChanged(e.target.value)}
                      prepend={
                        <MDBDropdown>
                          <MDBDropdownToggle
                            color={theme}
                            size='md'
                            className='m-0 px-3 z-depth-0'
                          >
                            {destinationCurrency} <MDBIcon icon='caret-down' className='ml-1' />
                          </MDBDropdownToggle>
                          <MDBDropdownMenu color={theme}>
                            {destinationCurrencies.map(function(currency, i){
                              return <MDBDropdownItem
                                obj={currency.code}
                                key={i}
                                onClick={() => destinationCurrencyChanged(currency.code)}
                                >
                                  {currency.description}
                              </MDBDropdownItem>;
                            })}
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      }
                    />
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
