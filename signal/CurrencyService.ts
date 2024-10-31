import {Injectable, Signal, signal} from '@angular/core';
import {Currency} from './Currency';

// export interface ExchangeRates {
//     EUR: number;
//     GBP: number;
//     USD: number;
// }

export type ExchangeRates = Record<Currency, number>;

export interface CurrencyInfo{
    currency: Currency;
    exchangeRate: number;
}

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    
   private readonly currency = signal<Currency>('USD');

   //obversable for http api call
   private exchangeRates$ = inject(HttpClient).get<ExchangeRates>("....getRatesURL");
   //turn observable to signal (signal of exhangeRates or undefined)

   //fallback (initial value, when value's at first undefined)
   private exchangeRates = toSignal(this.exchangeRates$, {initialValue: {USD: 1, EUR: 1, GBP: 1}});

   private currencyInfo = computed<CurrencyInfo>(() => {
      const exchangeRate = this.getExchangeRate()[this.currency()];
      return {currency: this.currency(), exchangeRate};
   });

   getCurrencyInfo(): Signal<CurrencyInfo> {
       return this.currencyInfo;
   }

   setCurrency(currency: Currency): void {
        this.currency.set(currency);
   } 
}
