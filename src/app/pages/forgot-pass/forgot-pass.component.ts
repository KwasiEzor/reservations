import { Component, OnInit , Output } from '@angular/core';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {
  @Output() newTitle="Récupération mot de passe"
  constructor() { }

  ngOnInit(): void {
  }

}
