import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
 @Output() newTitle = "Connexion"
  constructor() { }

  ngOnInit(): void {
  }

}
