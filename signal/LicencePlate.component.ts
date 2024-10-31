//...imports
import { CurrencyService } from "./CurrencyService";


/*
Signal based component > future in Angular
relies on signals totally


*/
@Composition({
    selector: 'app-licence-plate',
    standalone: true,
    templateUrl: './currency.component.html',
    styleUrls: ['./component.css']
})
export class LicencePlateComponent {

    //    @Input()
    //    plate!: LicencePlate;
   plate = input.required<LicencePlate>();

    //    @Input()
    //    buttonText!: string;
   buttonText = input<string>();

   currencyInfo = input.required<CurrencyInfo>();

}