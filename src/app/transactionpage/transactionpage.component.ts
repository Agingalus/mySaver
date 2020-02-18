import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactionpage',
  templateUrl: './transactionpage.component.html',
  styleUrls: ['./transactionpage.component.css']
})
export class TransactionPageComponent implements OnInit {

  hello() {
    console.log("hello")
  }
  somethingSilly() {
    console.log("this is really silly");
    console.log("im in the parent class");
  }


  constructor() {

  }

  ngOnInit() {
  }

}
