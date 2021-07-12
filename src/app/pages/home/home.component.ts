import { formatDate } from '@angular/common';
import { Component, OnInit,Pipe,PipeTransform,ViewEncapsulation } from '@angular/core';
import { LOCALE_ID, Inject } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation:ViewEncapsulation.None
})

export class HomeComponent implements OnInit {
  public width = "20rem"
  public cardList:any=[
    {
      id:"1",
      title:"Spectacle 1",
      image:"assets/img/img-1.png",
      content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      date:"05.06.2021",
      places:15,
      price: 20,
      bookable:true
    },
    {
      id:"2",
      title:"Spectacle 2",
      image:"assets/img/img-2.png",
      content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      date:"05.06.2021",
      places:15,
      price: 20,
      bookable:true
    },
    {
      id:"3",
      title:"Spectacle 3",
      image:"assets/img/img-3.png",
      content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      date:"05.06.2021",
      places:15,
      price: 20,
      bookable:true
    },
    {
      id:"4",
      title:"Spectacle 4",
      image:"assets/img/img-4.png",
      content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      date:"05.06.2021",
      places:15,
      price: 20,
      bookable:true
    },
    {
      id:"5",
      title:"Spectacle 5",
      image:"assets/img/img-5.png",
      content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      date:"05.06.2021",
      places:15,
      price: 20,
      bookable:true
    },
    {
      id:"6",
      title:"Spectacle 6",
      image:"assets/img/img-6.png",
      content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      date:"05.06.2021",
      places:15,
      price: 20,
      bookable:true
    },

  ]

  constructor(@Inject(LOCALE_ID) public locale:string) { }

  ngOnInit(): void {
    console.log(this.cardList)
  }

}
export class NgbdAccordionHeader {
  disabled = false;
}
