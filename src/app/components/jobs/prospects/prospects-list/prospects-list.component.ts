import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-prospects-list',
  templateUrl: './prospects-list.component.html',
  styleUrls: ['./prospects-list.component.scss'],
  animations: [
    trigger('contactsAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(-100px)', opacity: '0'}),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})
export class ProspectsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
