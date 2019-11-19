import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Accounts } from '../../accounts';
import { AccountService } from '../../service'
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, ReactiveFormsModule } from '@angular/forms'


@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent implements OnInit {
  displayedColumns: string[] = ['Bank','AvailableBalance', 'Balance', 'Currency' ];
  
  newAccount: Accounts = new Accounts();
  ourAccounts: Accounts[] 
  dataSource = new MatTableDataSource<Accounts>(this.ourAccounts);
 
  getAccounts(): void {
    this.myAccountService.getAllAccounts().subscribe((accountData: Accounts[]) => {
      this.ourAccounts = accountData;
      this.dataSource = new MatTableDataSource<Accounts>(this.ourAccounts);
      this.dataSource.paginator = this.paginator;
    })
  }


  bank = new FormControl();
  bankaccountnumber = new FormControl();
  accounttype = new FormControl();
  availablebalance = new FormControl();
  balance = new FormControl();
  currency = new FormControl();
  friendlyname = new FormControl();
  accountid = new FormControl();

  addNewAccount(){

    console.log("button clicked")
    this.newAccount.accountid = this.accountid.value
    this.newAccount.friendlyname = this.friendlyname.value
    this.newAccount.currency = this.currency.value
    this.newAccount.balance = this.balance.value
    this.newAccount.availablebalance = this.availablebalance.value
    this.newAccount.accounttype = this.accounttype.value
    this.newAccount.bankaccountnumber = this.bankaccountnumber.value
    this.newAccount.bank= this.bank.value
    this.myAccountService.addAccount(this.newAccount).subscribe();
    this.friendlyname.setValue("")
    this.currency.setValue("")
    this.balance.setValue("")
    this.availablebalance.setValue("")
    this.accounttype.setValue("")
    this.bankaccountnumber.setValue("")
    this.bank.setValue("")

  }

  constructor(private myAccountService: AccountService, private router: Router) {}
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    ngOnInit() {
  
      this.getAccounts();
      this.dataSource = new MatTableDataSource<Accounts>(this.ourAccounts);
      this.dataSource.paginator = this.paginator;
    }

}
