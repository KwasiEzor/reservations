import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Output() newTitle = "Contact"
  constructor() { }

  ngOnInit(): void {
  }

}
