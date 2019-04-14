import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: { 
      0: {
        items: 1
      },
      2160: {
        items: 2
      },
      4320: {
        items: 3
      },
      8640: {
        items: 4
      }
    },
    nav: true
  }

  constructor() { }
 
  ngOnInit() {
    
  }

}
