import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMediServiceComponent } from './add-medi-service.component';

describe('AddMediServiceComponent', () => {
  let component: AddMediServiceComponent;
  let fixture: ComponentFixture<AddMediServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMediServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMediServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
