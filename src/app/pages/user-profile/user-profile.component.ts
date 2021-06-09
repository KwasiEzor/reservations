import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Output() newTitle = "Mon profil"
  constructor() { }

  ngOnInit(): void {
  }

}
