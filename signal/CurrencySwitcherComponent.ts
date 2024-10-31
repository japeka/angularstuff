//...imports
import { CurrencyService } from "./CurrencyService";

@Composition({
    selector: '',
    standalone: true,
    templateUrl: './currency.component.html',
    styleUrls: ['./component.css']
})
export class CurrencySwitcherComponent {
    
    showItems = false;
    service = inject(CurrencyService);
    currencyInfo = this.service.getCurrencyInfo();

    changeCurrency(currency: Currency): void {
       this.service.setCurrency(currency);    
       this.showItems = false;
    }
}
