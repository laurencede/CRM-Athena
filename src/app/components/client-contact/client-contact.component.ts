import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-client-contact',
  templateUrl: './client-contact.component.html',
  styleUrls: ['./client-contact.component.scss'],
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
export class ClientContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
