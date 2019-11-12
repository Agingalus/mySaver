import { Component, OnInit } from '@angular/core';

const data = {
  chart: {
    caption: "Top 5 Spending Categories",
    yaxisname: "Amount",
    showvalues: "1",
    numberprefix: "$",
    theme: "candy",
    bgColor: "#DDDDDD"
  },
  data: [
    {
      label: "Rent",
      value: "2500"
    },
    {
      label: "Education",
      value: "1500"
    },
    {
      label: "Credit Card",
      value: "300"
    },
    {
      label: "Gas",
      value: "250"
    },
    {
      label: "Groceries",
      value: "500"
    }
  ]
};
@Component({
  selector: 'app-report-main',
  templateUrl: './report-main.component.html',
  styleUrls: ['./report-main.component.css']
})
export class ReportMainComponent implements OnInit {

  width = 600;
  height = 400;
  type = "bar3d";
  dataFormat = "json";
  dataSource = data;

  constructor() { }

  ngOnInit() {
  }

}
