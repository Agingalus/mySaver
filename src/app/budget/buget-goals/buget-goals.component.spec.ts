import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugetGoalsComponent } from './buget-goals.component';

describe('BugetGoalsComponent', () => {
  let component: BugetGoalsComponent;
  let fixture: ComponentFixture<BugetGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugetGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugetGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
