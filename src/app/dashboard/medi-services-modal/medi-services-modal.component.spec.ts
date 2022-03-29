import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediServicesModalComponent } from './medi-services-modal.component';

describe('MediServicesModalComponent', () => {
  let component: MediServicesModalComponent;
  let fixture: ComponentFixture<MediServicesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediServicesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediServicesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
