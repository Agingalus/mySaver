import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material';
//import { FormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { SettingsCardComponent } from './settings-card.component';

// describe('SettingsCardComponent', () => {
//   let component: SettingsCardComponent;
//   let fixture: ComponentFixture<SettingsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        //FormsModule,
        //ReactiveFormsModule,
        MatSelectModule,
        MatCardModule,
        BrowserAnimationsModule
      ],
      declarations: [ SettingsCardComponent ]
    })
    .compileComponents();
  }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SettingsCardComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
