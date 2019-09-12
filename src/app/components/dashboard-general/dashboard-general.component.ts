import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dashboard-general',
  templateUrl: './dashboard-general.component.html',
  styleUrls: ['./dashboard-general.component.scss'],
  animations: [
    trigger('icone1Animation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(-500px)', opacity: '0'}),
        animate('1800ms ease-out')
      ])
    ]),
    trigger('icone2Animation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(500px)', opacity: '0'}),
        animate('1800ms ease-out')
      ])
    ]),
    trigger('icone3Animation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(-500px)', opacity: '0'}),
        animate('1800ms ease-out')
      ])
    ]),
    trigger('icone4Animation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(500px)', opacity: '0'}),
        animate('1800ms ease-out')
      ])
    ])
  ]
})
export class DashboardGeneralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
