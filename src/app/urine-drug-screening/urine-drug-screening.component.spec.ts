import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrineDrugScreeningComponent } from './urine-drug-screening.component';

describe('UrineDrugScreeningComponent', () => {
  let component: UrineDrugScreeningComponent;
  let fixture: ComponentFixture<UrineDrugScreeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrineDrugScreeningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrineDrugScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
