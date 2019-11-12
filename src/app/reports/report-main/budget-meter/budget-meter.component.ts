import { Component, OnInit } from '@angular/core';
const data = {
  chart: {
    caption: "Electromagnetic Water Flow Meter",
    subcaption: "Pressure Reading",
    numbersuffix: "psi",
    gaugefillmix: "{dark-20},{light+70},{dark-10}",
    theme: "fusion"
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "5",
        label: "Below{br}Average",
        code: "#F2726F"
      },
      {
        minvalue: "5",
        maxvalue: "7.5",
        label: "Average",
        code: "#FFC533"
      },
      {
        minvalue: "7.5",
        maxvalue: "10",
        label: "High",
        code: "#62B58F"
      }
    ]
  },
  pointers: {
    pointer: [
      {
        value: "5"
      }
    ]
  }
};

@Component({
  selector: 'app-budget-meter',
  templateUrl: './budget-meter.component.html',
  styleUrls: ['./budget-meter.component.css']
})
export class BudgetMeterComponent implements OnInit {
  width = 600;
  height = 400;
  type = "hlineargauge";
  dataFormat = "json";
  dataSource = data;
  
  constructor() { }

  ngOnInit() {
  }
  

}
