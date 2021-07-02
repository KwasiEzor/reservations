import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  headerFixed : boolean = false
  headerPosition: any
  ngOnInit(): void {
  }
  @ViewChild('stickyHeader') headerElement : ElementRef
  @HostListener('window:scroll')
  scrollFunction(){
    const windowScroll = window.pageYOffset
    if(windowScroll > this.headerPosition){
      this.headerPosition = true
    }else{
      this.headerFixed = false
    }
  }
  ngAfterViewInit(){
    this.headerPosition = this.headerElement.nativeElement.offsetTop
  }

}
