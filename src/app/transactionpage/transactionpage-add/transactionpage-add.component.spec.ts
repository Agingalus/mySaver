import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material';
import { TransactionPageAddComponent } from './transactionpage-add.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



describe('TransactionPageAddComponent', () => {
  let component: TransactionPageAddComponent;
  let fixture: ComponentFixture<TransactionPageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        //HttpTestingControllergModule
      ],
      imports: [ 
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCardModule,
        HttpClientTestingModule,
        //RouterModule.forRoot(routes)
        RouterModule.forRoot([{ path: "", component: TransactionPageAddComponent}]),
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [ 
        TransactionPageAddComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
