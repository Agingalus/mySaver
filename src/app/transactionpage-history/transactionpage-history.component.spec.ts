import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPageHistoryComponent } from './transactionpage-history.component';

describe('TransactionHistoryComponent', () => {
  let component: TransactionPageHistoryComponent;
  let fixture: ComponentFixture<TransactionPageHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionPageHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPageHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
