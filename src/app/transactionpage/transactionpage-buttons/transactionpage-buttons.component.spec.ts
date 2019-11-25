import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { transactionPageButtonsComponent } from './transactionpage-buttons.component';


describe('transactionPageButtonsComponent', () => {
  let component: transactionPageButtonsComponent;
  let fixture: ComponentFixture<transactionPageButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [transactionPageButtonsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(transactionPageButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
