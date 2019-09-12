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
import {ProjetsComponent} from './components/projets/projets.component';
import {JournalComponent} from './components/journal/journal.component';
import { ClientStatComponent} from './components/client-stat/client-stat.component';
import { ClientContactComponent } from './components/client-contact/client-contact.component';
import {AgendaLocalComponent} from './components/agenda-local/agenda-local.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'Home'}},
  { path: 'home',
    children: [
      { path: 'connexion', component: ConnexionComponent, data: {animation: 'Connexion'}},
      { path: 'inscription', component: InscriptionComponent, data: {animation: 'Inscription'}}
    ]},
  { path: 'dashboardGeneral', component: DashboardGeneralComponent, data: {animation: 'DashboardGeneral'} },
      { path: 'statistiques', component: StatistiquesComponent, data: {animation: 'Statistique'}},
      { path: 'agenda', component: AgendaComponent, data: {animation: 'Agenda'} },
      { path: 'listClient', component: ClientsListComponent, data: {animation: 'ListClient'} },
      { path: 'listProspects', component: ProspectsListComponent, data: {animation: 'ListProspect'}},
      { path: 'parametres', component: ParametresComponent, data: {animation: 'Parametre'} },
  { path: 'client', component: ClientsOneComponent, data: {animation: 'Client'}},
  { path: 'addClient', component: ClientsAddComponent },
  { path: 'updateClient', component: ClientUpdateComponent },
  { path: 'prospect', component: ProspectsOneComponent },
  { path: 'addProspect', component: ProspectsAddComponent },
  { path: 'updateProspect', component: ProspectsUpdateComponent },
  { path: 'dashboardClient', component: DashboardClientComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'clientStat', component: ClientStatComponent,  data: {animation: 'Statistique' }},
  { path: 'clientContact', component: ClientContactComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'agendaLocal', component: AgendaLocalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
