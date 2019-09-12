import { Component, OnInit } from '@angular/core';
import {
  CalendarEvent,
  CalendarDateFormatter,
  DAYS_OF_WEEK
} from 'angular-calendar';
import { CustomDateFormatter } from './data.format.provider';

@Component({
  selector: 'app-agenda-local',
  templateUrl: './agenda-local.component.html',
  styleUrls: ['./agenda-local.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})

export class AgendaLocalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
