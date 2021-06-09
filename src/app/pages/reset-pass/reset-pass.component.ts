import { Component, OnInit , Output } from '@angular/core';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {
@Output() newTitle = "Nouveau mot de passe"
  constructor() { }

  ngOnInit(): void {
  }

}
