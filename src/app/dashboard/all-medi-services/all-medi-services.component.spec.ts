import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMediServicesComponent } from './all-medi-services.component';

describe('AllMediServicesComponent', () => {
  let component: AllMediServicesComponent;
  let fixture: ComponentFixture<AllMediServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMediServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMediServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
