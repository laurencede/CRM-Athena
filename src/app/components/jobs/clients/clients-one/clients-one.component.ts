import { Component, OnInit } from '@angular/core';

import { Client } from '../../../../client';
import { ClientService } from '../../../../client.service';
import { FormBuilder } from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-clients-one',
  templateUrl: './clients-one.component.html',
  styleUrls: ['./clients-one.component.scss'],
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
export class ClientsOneComponent implements OnInit {
  public clients;

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.getClients();
  }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients()
      .subscribe(
        data => { this.clients = data},
        err => console.log(err)
      );
  }

}
