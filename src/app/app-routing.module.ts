import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardGeneralComponent } from './components/dashboard-general/dashboard-general.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import {StatistiquesComponent} from './components/statistiques/statistiques.component';
import {ParametresComponent} from './components/parametres/parametres.component';
import {ClientsListComponent} from './components/jobs/clients/clients-list/clients-list.component';
import {ClientsAddComponent} from './components/jobs/clients/clients-add/clients-add.component';
import {ClientsOneComponent} from './components/jobs/clients/clients-one/clients-one.component';
import {ClientUpdateComponent} from './components/jobs/clients/client-update/client-update.component';
import {ProspectsListComponent} from './components/jobs/prospects/prospects-list/prospects-list.component';
import {ProspectsOneComponent} from './components/jobs/prospects/prospects-one/prospects-one.component';
import {ProspectsAddComponent} from './components/jobs/prospects/prospects-add/prospects-add.component';
import {ProspectsUpdateComponent} from './components/jobs/prospects/prospects-update/prospects-update.component';
import {DashboardClientComponent} from './components/dashboard-client/dashboard-client.component';





const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: '',
    children: [
      { path: 'connexion', component: ConnexionComponent},
      { path: 'inscription', component: InscriptionComponent}
    ]},
  { path: 'dashboardGeneral', component: DashboardGeneralComponent },
      { path: 'statistiques', component: StatistiquesComponent},
      { path: 'agenda', component: AgendaComponent },
      { path: 'listClient', component: ClientsListComponent },
      { path: 'listProspects', component: ProspectsListComponent},
      { path: 'parametres', component: ParametresComponent },
  { path: 'client', component: ClientsOneComponent},
  { path: 'addClient', component: ClientsAddComponent},
  { path: 'updateClient', component: ClientUpdateComponent},
  { path: 'prospect', component: ProspectsOneComponent},
  { path: 'addProspect', component: ProspectsAddComponent},
  { path: 'updateProspect', component: ProspectsUpdateComponent},
  { path: 'dashboardClient', component: DashboardClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
