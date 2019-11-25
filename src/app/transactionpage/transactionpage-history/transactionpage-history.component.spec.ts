import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material';
import { TransactionPageHistoryComponent } from './transactionpage-history.component';
import { MatPaginatorModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router' ;

describe('TransactionPageHistoryComponent', () => {
  let component: TransactionPageHistoryComponent;
  let fixture: ComponentFixture<TransactionPageHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        //HttpClientTestingModule
        //HttpTestingController
      ],
      imports: [
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        HttpClientTestingModule,
        RouterModule.forRoot([{ path: "", component: TransactionPageHistoryComponent}])
      ],
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
