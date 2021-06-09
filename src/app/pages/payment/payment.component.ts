import { Component, OnInit , Output } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Output() newTitle = "Paiement"
  constructor() { }

  ngOnInit(): void {
  }

}
