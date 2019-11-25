import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetComponent } from './budget.component';

describe('BudgetComponent', () => {
  let component: BudgetComponent;
  let fixture: ComponentFixture<BudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Can delete Budget', function(){ 
  let component: BudgetComponent;
  let fixture: ComponentFixture<BudgetComponent>; 
    beforeEach(function(done){
        component.selectedTask._id = component.saved_id;
        component.selectedTask.taskName = "TestCreate";
        console.log("task about to delete " + component.selectedTask._id )
        component.deleteTask();
        setTimeout(() => {done();}, 2000); 
        });

describe('deleted budget should be gone', function(){  
    beforeEach(function(done){
        component.foundTask._id = component.saved_id;
        console.log('just before call to find ' + component.foundTask._id );
        component.findTask();
        setTimeout(() => {done();}, 2000); 
    });

    it('should not find deleted record', function(){
        expect( component.foundTask).toBe(null);
    });
});  

}); 