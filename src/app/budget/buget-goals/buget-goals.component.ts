import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Budgets} from '../../budgets';
import { BudgetService } from '../../service'
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Category } from "../../categories";
import { CategoryService } from "../../service";

@Component({
  selector: 'app-buget-goals',
  templateUrl: './buget-goals.component.html',
  styleUrls: ['./buget-goals.component.css']
})
export class BugetGoalsComponent implements OnInit {
  displayedColumns: string[] = ['BudgetID','GoalCategory', 'GoalAmount' ];

  ourCategories: Category[];
  viewValue = this.ourCategories;
  
  getCatagories(): void {
    this.myCategoryService.getAllCategories().subscribe((categoryData: Category[]) => {
      this.ourCategories = categoryData;
    })
  }
  
  ourTransactions: Budgets[] 
  dataSource = new MatTableDataSource<Budgets>(this.ourTransactions);
 
  getTransactions(): void {
    this.myTransactionService.getAllBudgets().subscribe((transactionData: Budgets[]) => {
      this.ourTransactions = transactionData;
      this.dataSource = new MatTableDataSource<Budgets>(this.ourTransactions);
      this.dataSource.paginator = this.paginator;
    })
  }

  constructor(private myCategoryService: CategoryService,private myTransactionService: BudgetService, private router: Router) {}
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    ngOnInit() {
  
      this.getTransactions();
      this.dataSource = new MatTableDataSource<Budgets>(this.ourTransactions);
      this.dataSource.paginator = this.paginator;

      this.getCatagories();
    }
    

}
