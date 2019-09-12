import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ExcelService } from '../../../../excel.service';

import { Client } from '../../../../client';
import { ClientService } from '../../../../client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
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
export class ClientsListComponent implements OnInit {
  state: any;
  dataset = ['La Brioche', 'Mangez-Moi', 'La Gondole'];

  public clients;

  constructor(private fb: FormBuilder, private clientService: ClientService, private excelService: ExcelService) {
    this.getClients();
  }


  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients()
      .subscribe(
        data => {
          this.clients = data;
        },
        err => console.log(err)
      );
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }

  data: any = [{
    name: 'Brioche Boulangerie',
    logotype: 'Brioche',
    tel: '02 01 05 06 08',
    mail: 'briocheBoulangerie@gmail.com',
    adress: '145 avenue de la Gironde',
    postalCode: '59000',
    city: 'Lille',
    country: 'France',
    details: 'Fabrication artisanale',
    activityArea: 'non communiqué',
    lead: '1',
    potential: '1',
    contacted: 'oui',
    converted: '1',
    source: 'téléphone',
  }, {
    name: 'Brioche Boulangerie',
    logotype: 'Brioche',
    tel: '02 01 05 06 08',
    mail: 'briocheBoulangerie@gmail.com',
    adress: '145 avenue de la Gironde',
    postalCode: '59000',
    city: 'Lille',
    country: 'France',
    details: 'Fabrication artisanale',
    activityArea: 'non communiqué',
    lead: '1',
    potential: '1',
    contacted: 'oui',
    converted: '1',
    source: 'téléphone',
  }, {
    name: 'Brioche Boulangerie',
    logotype: 'Brioche',
    tel: '02 01 05 06 08',
    mail: 'briocheBoulangerie@gmail.com',
    adress: '145 avenue de la Gironde',
    postalCode: '59000',
    city: 'Lille',
    country: 'France',
    details: 'Fabrication artisanale',
    activityArea: 'non communiqué',
    lead: '1',
    potential: '1',
    contacted: 'oui',
    converted: '1',
    source: 'téléphone',
  }, {
    name: 'Brioche Boulangerie',
    logotype: 'Brioche',
    tel: '02 01 05 06 08',
    mail: 'briocheBoulangerie@gmail.com',
    adress: '145 avenue de la Gironde',
    postalCode: '59000',
    city: 'Lille',
    country: 'France',
    details: 'Fabrication artisanale',
    activityArea: 'non communiqué',
    lead: '1',
    potential: '1',
    contacted: 'oui',
    converted: '1',
    source: 'téléphone',
  }, {
    name: 'Brioche Boulangerie',
    logotype: 'Brioche',
    tel: '02 01 05 06 08',
    mail: 'briocheBoulangerie@gmail.com',
    adress: '145 avenue de la Gironde',
    postalCode: '59000',
    city: 'Lille',
    country: 'France',
    details: 'Fabrication artisanale',
    activityArea: 'non communiqué',
    lead: '1',
    potential: '1',
    contacted: 'oui',
    converted: '1',
    source: 'téléphone',
  }, {
    name: 'Brioche Boulangerie',
    logotype: 'Brioche',
    tel: '02 01 05 06 08',
    mail: 'briocheBoulangerie@gmail.com',
    adress: '145 avenue de la Gironde',
    postalCode: '59000',
    city: 'Lille',
    country: 'France',
    details: 'Fabrication artisanale',
    activityArea: 'non communiqué',
    lead: '1',
    potential: '1',
    contacted: 'oui',
    converted: '1',
    source: 'téléphone',
  }, {
    name: 'Brioche Boulangerie',
    logotype: 'Brioche',
    tel: '02 01 05 06 08',
    mail: 'briocheBoulangerie@gmail.com',
    adress: '145 avenue de la Gironde',
    postalCode: '59000',
    city: 'Lille',
    country: 'France',
    details: 'Fabrication artisanale',
    activityArea: 'non communiqué',
    lead: '1',
    potential: '1',
    contacted: 'oui',
    converted: '1',
    source: 'téléphone',
  }, {
    name: 'Brioche Boulangerie',
    logotype: 'Brioche',
    tel: '02 01 05 06 08',
    mail: 'briocheBoulangerie@gmail.com',
    adress: '145 avenue de la Gironde',
    postalCode: '59000',
    city: 'Lille',
    country: 'France',
    details: 'Fabrication artisanale',
    activityArea: 'non communiqué',
    lead: '1',
    potential: '1',
    contacted: 'oui',
    converted: '1',
    source: 'téléphone',
  }, {
    name: 'Brioche Boulangerie',
    logotype: 'Brioche',
    tel: '02 01 05 06 08',
    mail: 'briocheBoulangerie@gmail.com',
    adress: '145 avenue de la Gironde',
    postalCode: '59000',
    city: 'Lille',
    country: 'France',
    details: 'Fabrication artisanale',
    activityArea: 'non communiqué',
    lead: '1',
    potential: '1',
    contacted: 'oui',
    converted: '1',
    source: 'téléphone',
  }, {
    name: 'Brioche Boulangerie',
    logotype: 'Brioche',
    tel: '02 01 05 06 08',
    mail: 'briocheBoulangerie@gmail.com',
    adress: '145 avenue de la Gironde',
    postalCode: '59000',
    city: 'Lille',
    country: 'France',
    details: 'Fabrication artisanale',
    activityArea: 'non communiqué',
    lead: '1',
    potential: '1',
    contacted: 'oui',
    converted: '1',
    source: 'téléphone',
  }, {
    name: 'Brioche Boulangerie',
    logotype: 'Brioche',
    tel: '02 01 05 06 08',
    mail: 'briocheBoulangerie@gmail.com',
    adress: '145 avenue de la Gironde',
    postalCode: '59000',
    city: 'Lille',
    country: 'France',
    details: 'Fabrication artisanale',
    activityArea: 'non communiqué',
    lead: '1',
    potential: '1',
    contacted: 'oui',
    converted: '1',
    source: 'téléphone',
  }];
}
