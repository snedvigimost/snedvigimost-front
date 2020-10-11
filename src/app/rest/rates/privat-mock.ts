import {PrivatRateDto} from './privatRateDto';
import {CurrencyEnum} from './currency.enum';

export const rate: PrivatRateDto[] = [
  {
    ccy: CurrencyEnum.USD,
    base_ccy: CurrencyEnum.UAH,
    buy: '28.00000',
    sale: '28.41000'
  },
  {
    ccy: CurrencyEnum.EUR,
    base_ccy: CurrencyEnum.UAH,
    buy: '32.85000',
    sale: '33.45000'
  }
];
