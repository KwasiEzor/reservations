import { Component, OnInit , Output} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Output() newTitle:string = "Inscription"
  constructor() { }

  ngOnInit(): void {
  }

}
