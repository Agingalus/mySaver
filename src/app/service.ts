import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';  // one article had it this way, didn't work
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Transactions } from "./transaction"

@Injectable({ providedIn: 'root' })  // this makes this service injectable, Angular's dependecy injection model
export class TransactionService {
	constructor(private http: HttpClient) { }
	getAllTransactions(): Observable<Transactions[]> {
		//return  this.http.get<Task[]>('http://localhost:3000/tasks');
		// console.log("hi pal!");
		// console.log(this.http.get<Transactions[]>('https://mysaverserver2.azurewebsites.net/transactions'))
		return this.http.get<Transactions[]>('https://mysaverserver2.azurewebsites.net/transactions');
	}

}