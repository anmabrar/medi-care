import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentListModalComponent } from './appointment-list-modal.component';

describe('AppointmentListModalComponent', () => {
  let component: AppointmentListModalComponent;
  let fixture: ComponentFixture<AppointmentListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentListModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
