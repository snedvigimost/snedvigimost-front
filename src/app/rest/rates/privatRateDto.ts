import {CurrencyEnum} from './currency.enum';

export class PrivatRateDto {
  ccy: CurrencyEnum;
  // tslint:disable-next-line:variable-name
  base_ccy: CurrencyEnum;
  buy: string;
  sale: string;
}
