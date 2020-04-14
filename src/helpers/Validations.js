/*eslint eqeqeq:0*/
import moment from 'moment';

export const required = value => value ? undefined : 'Required'
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined  
export const maxLength4 = maxLength(4)
export const maxLength15 = maxLength(15)
export const maxLength19 = maxLength(19)
export const maxLength20 = maxLength(20)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength8 = minLength(8)
export const minLength3 = minLength(3)
export const minLength13 = minLength(13)
export const minLength20 = minLength(20)
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const numberAndSpace = value => {
  const pattern = new RegExp('[0-9 ]+');
  return !pattern.test(value) ? 'Invalid entry' : undefined;
}
export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
export const minValue18 = minValue(18)
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
export const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
export const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined

export const notValue = prohibitedValue => value =>
  prohibitedValue === value ? `Please select` : undefined  
export const notChoose = notValue('Choose...')
export const expiryDate1 = (value) => {
  const pattern = new RegExp('(0[1-9]|10|11|12)/20[1-9]{2}$');
  return !pattern.test(value) ? 'Invalid expiry date' : undefined;
}

export const expiryDate = (value) => {
  if(value.length < 7) {
    return 'Invalid expiry date';
  }
  const pattern = new RegExp('(0[1-9]|10|11|12)/20[0-9]{2}$');
  const isValidPattern = pattern.test(value);
  const startOfCurrentMonth = moment(moment().startOf('month').format('YYYY-MM-DD hh:mm'));
  const startOfValueMonth = moment(moment(`01/${value}`, 'DD/MM/YYYY').startOf('month').format('YYYY-MM-DD hh:mm'));
  const isFutureDate = startOfValueMonth.isSameOrAfter(startOfCurrentMonth);
  return isValidPattern && isFutureDate ? undefined : 'Invalid expiry date';
}

export const validateNuban = (value, formValues) => {
  const {bankCode, bankAccountNumber} = formValues;
  if (typeof bankCode !== 'string' || typeof bankAccountNumber !== 'string')
    return 'nuban is invalid';
    
  if (bankCode.length !== 3 || bankAccountNumber.length !== 10)
    return 'nuban is invalid';

  let checkDigit = bankAccountNumber.charAt(9);
  const dictionary = [3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3];
  const accountSerialNo = bankAccountNumber.substring(0, 9);
  const nubanAccountFormat = bankCode + accountSerialNo;

  let checkSum = 0;

  nubanAccountFormat
      .split('')
      .forEach(function (char, index) {
        checkSum += (char * dictionary[index]);    
      });

  let validatedCheckDigit = 10 - (checkSum % 10);
  validatedCheckDigit = validatedCheckDigit == 10 ? 0 : validatedCheckDigit;
  return checkDigit == validatedCheckDigit ? undefined: 'nuban is invalid';

}
export const luhnValidate = (number) => {
  const numberWithoutWhiteSpace = number.replace(/ /g,'');
  const checkedOk = luhnChecksum(numberWithoutWhiteSpace) === 0;
  return !checkedOk ? `Invalid credit/debit card number` : undefined
}
const luhnChecksum = (code) => {
  const len = code.length;
  const parity = len % 2;
  let sum = 0;
  for (let i = len-1; i >= 0; i--) {
    let d = parseInt(code.charAt(i));
    if (i % 2 == parity) { d *= 2 }
    if (d > 9) { d -= 9 }
    sum += d;
  }
  return sum % 10;
}

export const luhnCalculate = (partcode) => {
  var checksum = luhnChecksum(partcode + "0")
  return checksum === 0 ? 0 : 10 - checksum;
}

export const isValidMoney = (value) => {
  return true
}
