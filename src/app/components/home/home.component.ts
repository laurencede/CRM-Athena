import { Component, OnInit } from '@angular/core';
import {transition, trigger, query, style, animate, group, animateChild, state} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('athenaAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateX(-400px)', opacity: '0'}),
        animate('1600ms ease-in-out')
      ])
    ]),
    trigger('triangleAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void=>*', [
        style({transform: 'translateX(600px)', opacity: '0'}),
        animate('1600ms ease-in-out')
      ])
    ]),
    trigger('boutonAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void=>*', [
        style({ opacity: '0'}),
        animate('2000ms 1000ms')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
