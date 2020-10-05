import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDecisionMakingComponent } from './shared-decision-making.component';

describe('SharedDecisionMakingComponent', () => {
  let component: SharedDecisionMakingComponent;
  let fixture: ComponentFixture<SharedDecisionMakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedDecisionMakingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDecisionMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
