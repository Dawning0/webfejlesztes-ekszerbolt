import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyExchange'
})
export class CurrencyExchangePipe implements PipeTransform {

  currencies: { [key: string]: string } = {
    USD: '$',
    HUF: 'HUF',
    EUR: '€'
  }

  rates: { [key: string]: number } = {
    HUF: 1,
    USD: 0.0034,
    EUR: 0.0025
  };

  transform(value: number, currency: string): string {
    return (value * this.rates[currency]).toFixed(0) +' ' + this.currencies[currency];
  }

}
