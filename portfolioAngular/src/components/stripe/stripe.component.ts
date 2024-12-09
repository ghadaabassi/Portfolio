import { Component } from '@angular/core';
import { environment } from '../../environment/environment';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-stripe',
  standalone: true,
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css'],
  imports: [ MatCardModule],
})
export class StripeComponent {
  paymentLink: string = environment.pay;

  redirectToPayment() {
    window.location.href = this.paymentLink;
  }
}
