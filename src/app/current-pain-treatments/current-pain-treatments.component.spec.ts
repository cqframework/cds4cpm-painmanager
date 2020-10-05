import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPainTreatmentsComponent } from './current-pain-treatments.component';

describe('CurrentPainTreatmentsComponent', () => {
  let component: CurrentPainTreatmentsComponent;
  let fixture: ComponentFixture<CurrentPainTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentPainTreatmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPainTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
