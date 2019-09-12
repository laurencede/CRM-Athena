import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Client, clients } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(): Observable<Client[]> {
    return of(clients).pipe();
  }

  addClients(client: Client) {
    const newClients = clients.unshift(client);
    return of(newClients).pipe();
  }
}
