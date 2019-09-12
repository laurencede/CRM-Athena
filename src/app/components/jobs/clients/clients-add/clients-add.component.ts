import { Component, OnInit } from '@angular/core';

import { Client } from '../../../../client';
import { ClientService } from '../../../../client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.scss']
})
export class ClientsAddComponent implements OnInit {

  public clients;
  reactForm: FormGroup;

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.createForm();
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

  createForm() {
    this.reactForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      logotype: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      tel: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      mail: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      adress: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      postalCode: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      city: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      country: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      details: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      activityArea: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      lead: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      potential: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      contacted: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      contactedDate: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      converted: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      convertedDate: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      notConvertedReason: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      source: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      createdAt: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      updatedAt: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    })
  }

  onSubmit() {
    const clientForm = this.reactForm.value;

    const client: Client = {
      name: clientForm.name,
      logotype: clientForm.logotype,
      tel: clientForm.tel,
      mail: clientForm.mail,
      adress: clientForm.adress,
      postalCode: clientForm.postalCode,
      city: clientForm.city,
      country: clientForm.country,
      details: clientForm.details,
      activityArea: clientForm.activityArea,
      lead: clientForm.lead,
      potential: clientForm.potential,
      contacted: clientForm.contacted,
      contactedDate: clientForm.contactedDate,
      converted: clientForm.converted,
      convertedDate: clientForm.convertedDate,
      notConvertedReason: clientForm.notConvertedReason,
      source: clientForm.source,
      createdAt: clientForm.createdAt,
      updatedAt: clientForm.updatedAt
    };

    this.clientService.addClients(client)
      .subscribe(
        data => {
          this.getClients();
          return true;
        },
        err => {
          console.log('Erreur');
          return Observable.throw(err);
        }
      );
    this.rebuildForm();
  }
  rebuildForm() {
    this.reactForm.reset({
      name: '',
      logotype: '',
      tel: '',
      mail: '',
      adress: '',
      postalCode: '',
      city: '',
      country: '',
      details: '',
      activityArea: '',
      lead: '',
      potential: '',
      contacted: '',
      contactedDate: '',
      converted: '',
      convertedDate: '',
      notConvertedReason: '',
      source: '',
      createdAt: '',
      updatedAt: ''
    });
  }

}
