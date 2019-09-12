import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.scss'],
  animations: [
    trigger('icone1Animation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateX(-500px)', opacity: '0'}),
        animate('1800ms ease-out')
      ])
    ]),
    trigger('icone2Animation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateX(500px)', opacity: '0'}),
        animate('1800ms ease-out')
      ])
    ]),
    trigger('icone3Animation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateX(-500px)', opacity: '0'}),
        animate('1800ms ease-out')
      ])
    ]),
    trigger('icone4Animation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateX(500px)', opacity: '0'}),
        animate('1800ms ease-out')
      ])
    ]),
    trigger('icone5Animation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateX(-500px)', opacity: '0'}),
        animate('1800ms ease-out')
      ])
    ])
  ]
})
export class DashboardClientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
