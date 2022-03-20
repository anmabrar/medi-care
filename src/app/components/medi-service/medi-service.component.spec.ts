import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediServiceComponent } from './medi-service.component';

describe('MediServiceComponent', () => {
  let component: MediServiceComponent;
  let fixture: ComponentFixture<MediServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
