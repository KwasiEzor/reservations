import { Component, OnInit , Output } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  @Output() newTitle="Nos Programmes"
  constructor() { }

  ngOnInit(): void {
  }

}
