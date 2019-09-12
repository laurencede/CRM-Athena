import { Component, OnInit } from '@angular/core';
import {
  CalendarEvent,
  CalendarDateFormatter,
  DAYS_OF_WEEK
} from 'angular-calendar';
import { CustomDateFormatter } from './data.format.provider';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class AgendaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
