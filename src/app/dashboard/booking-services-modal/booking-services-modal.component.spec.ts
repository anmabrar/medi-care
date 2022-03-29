import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingServicesModalComponent } from './booking-services-modal.component';

describe('BookingServicesModalComponent', () => {
  let component: BookingServicesModalComponent;
  let fixture: ComponentFixture<BookingServicesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingServicesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingServicesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
