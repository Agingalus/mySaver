import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { MatFormFieldModule } from '@angular/material';
import { ProfileCardComponent } from './profile-card.component';
import { MatCardModule } from '@angular/material'


// describe('ProfileCardComponent', () => {
//   let component: ProfileCardComponent;
//   let fixture: ComponentFixture<ProfileCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule
      ],
      declarations: [ ProfileCardComponent ]
    })
    .compileComponents();
  }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProfileCardComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
