import { Component, OnInit , Output} from '@angular/core';
import { CardItem } from './../../shared/interfaces/CardItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 @Output() newTitle = "Mon panier"
 @Output() cardList:any = []
  constructor() { }

  ngOnInit(): void {
  }

}
