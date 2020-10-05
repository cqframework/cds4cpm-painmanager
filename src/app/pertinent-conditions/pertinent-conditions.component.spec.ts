import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PertinentConditionsComponent } from './pertinent-conditions.component';

describe('PertinentConditionsComponent', () => {
  let component: PertinentConditionsComponent;
  let fixture: ComponentFixture<PertinentConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PertinentConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PertinentConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
