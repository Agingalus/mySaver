import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecTransactionsComponent } from './rec-transactions.component';

describe('RecTransactionsComponent', () => {
  let component: RecTransactionsComponent;
  let fixture: ComponentFixture<RecTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
