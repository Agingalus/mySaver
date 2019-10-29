import { Component, OnInit } from '@angular/core';

const data = {
  chart: {
    caption: "This is how much money you have spent ",
    //subcaption: "so far you have spent",
    showvalues: "1",
    showpercentintooltip: "0",
    numberprefix: "$",
    enablemultislicing: "1",
    theme: "carbon",
    plottooltext: "<b>$percentValue</b> of your spending was on $label",
    showlegend: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    forceDecimals: "1",
    formatNumber: "1",
    formatNumberScale: "0"
  },
  data: [
    {
      label: "Transport",
      value: "320.23"
    },
    {
      label: "Living",
      value: "1500"
    },
    {
      label: "Entertainment",
      value: "78.36"
    },
    {
      label: "Pet",
      value: "17.01"
    },
    {
      label: "School",
      value: "2753.36"
    }
  ]
};


@Component({
  selector: 'app-home-chart',
  templateUrl: './home-chart.component.html',
  styleUrls: ['./home-chart.component.css']
})
export class HomeChartComponent implements OnInit {
  width = 600;
  height = 400;
  type = "pie3d";
  dataFormat = "json";
  dataSource = data;
  constructor() { }

  ngOnInit() {
  }

}
