import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetMeterComponent } from './budget-meter.component';

describe('BudgetMeterComponent', () => {
  let component: BudgetMeterComponent;
  let fixture: ComponentFixture<BudgetMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
