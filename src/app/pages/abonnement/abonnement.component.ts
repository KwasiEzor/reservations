import { Component, OnInit , Output } from '@angular/core';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.scss']
})
export class AbonnementComponent implements OnInit {
  @Output() newTitle = "Abonnements "
  constructor() { }

  ngOnInit(): void {
  }

}
