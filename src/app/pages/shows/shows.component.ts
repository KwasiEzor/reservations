import { Component, OnInit , Output } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  @Output() newTitle="Nos spectacles"
  constructor() { }

  ngOnInit(): void {
  }

}
