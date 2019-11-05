import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Accounts } from '../../accounts';
import { AccountService } from '../../service'
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent implements OnInit {
  displayedColumns: string[] = ['Bank','AvailableBalance', 'Balance', 'Currency' ];
  
  ourTransactions: Accounts[] 
  dataSource = new MatTableDataSource<Accounts>(this.ourTransactions);
 
  getTransactions(): void {
    this.myTransactionService.getAllAccounts().subscribe((transactionData: Accounts[]) => {
      this.ourTransactions = transactionData;
      this.dataSource = new MatTableDataSource<Accounts>(this.ourTransactions);
      this.dataSource.paginator = this.paginator;
    })
  }

  constructor(private myTransactionService: AccountService, private router: Router) {}
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    ngOnInit() {
  
      this.getTransactions();
      this.dataSource = new MatTableDataSource<Accounts>(this.ourTransactions);
      this.dataSource.paginator = this.paginator;
    }


  foods: Food[] = [
    {value: '1', viewValue: 'Checking'},
    {value: '2', viewValue: 'Saving'},
  
  ];


}
