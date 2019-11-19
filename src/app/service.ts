import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';  // one article had it this way, didn't work
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Transactions } from "./transaction";
import { RecurringTransactions } from './recurringTransaction';
import { Accounts } from './accounts';
import { Category } from "./categories";

import { Budgets } from './budgets'

@Injectable({ providedIn: 'root' })  // this makes this service injectable, Angular's dependecy injection model
export class TransactionService {
	constructor(private http: HttpClient) { }
	getAllTransactions(): Observable<Transactions[]> {
		return this.http.get<Transactions[]>('https://mysaverserver2.azurewebsites.net/transactions');
	}
}

@Injectable({ providedIn: 'root' })
export class RecurringTransactionService {
	constructor(private http: HttpClient) { }
	getAllRecurringTransactions(): Observable<RecurringTransactions[]> {
		return this.http.get<RecurringTransactions[]>('https://mysaverserver2.azurewebsites.net/recurringTransactions');
	}
	addRecurringTransaction(newRec): 
}

@Injectable({ providedIn: 'root' })
export class AccountService {
	constructor(private http: HttpClient) { }
	getAllAccounts(): Observable<Accounts[]> {
		return this.http.get<Accounts[]>('https://mysaverserver2.azurewebsites.net/accounts');
	}
	addAccount(newAccount: Accounts): Observable<Accounts> {
		return this.http.post<Accounts>('https://mysaverserver2.azurewebsites.net/accounts', newAccount);
	}
}

@Injectable({ providedIn: 'root' })
export class BudgetService {
	constructor(private http: HttpClient) { }
	getAllBudgets(): Observable<Budgets[]> {
		return this.http.get<Budgets[]>('https://mysaverserver2.azurewebsites.net/budgets');
	}
	addBudget(newBudget: Budgets): Observable<Budgets> {
		return this.http.post<Budgets>('https://mysaverserver2.azurewebsites.net/budgets', newBudget);
	}
}
@Injectable({ providedIn: 'root' })
export class CategoryService {
	constructor(private http: HttpClient) { }
	getAllCategories(): Observable<Category[]> {
		return this.http.get<Category[]>('https://mysaverserver2.azurewebsites.net/categories');
	}
}