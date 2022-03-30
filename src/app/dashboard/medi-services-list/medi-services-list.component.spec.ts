import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediServicesListComponent } from './medi-services-list.component';

describe('MediServicesListComponent', () => {
  let component: MediServicesListComponent;
  let fixture: ComponentFixture<MediServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediServicesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
