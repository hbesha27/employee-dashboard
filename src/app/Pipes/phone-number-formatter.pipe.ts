import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberFormatter'
})
export class PhoneNumberFormatterPipe implements PipeTransform {

  transform(value: any, phoneNumber: number): string {

    const phoneNum = phoneNumber.toString();

    if (value.lenth < 10) {
      return value;
    }

    let formattedNumber = '';

    formattedNumber = '(' + phoneNum.substr(0, 3) + ') ' + phoneNum.substr(3, 3) + '-' + phoneNum.substr(6);

    console.log('formatted: ' + formattedNumber);

    return formattedNumber;
  }

}
