import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecentTransactionsHomeComponent } from './recent-transactions-home.component';


describe('RecentTransactionsHomeComponent', () => {
  let component: RecentTransactionsHomeComponent;
  let fixture: ComponentFixture<RecentTransactionsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecentTransactionsHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentTransactionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
