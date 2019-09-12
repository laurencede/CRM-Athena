import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaLocalComponent } from './agenda-local.component';

describe('AgendaLocalComponent', () => {
  let component: AgendaLocalComponent;
  let fixture: ComponentFixture<AgendaLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
