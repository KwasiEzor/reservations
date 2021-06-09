import { Component, OnInit , Output} from '@angular/core';
import { CardItem } from './../../shared/interfaces/CardItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 @Output() newTitle = "Mon panier"
 @Output() cardList:any = [
   {
     id:"1",
     title:"Spectacle 1",
     image:"../../../assets/img/img-1.png",
     content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
     date:"05-06-2021",
     price:"20",
     places:30
   },

 ]
  constructor() { }

  ngOnInit(): void {
  }

}
