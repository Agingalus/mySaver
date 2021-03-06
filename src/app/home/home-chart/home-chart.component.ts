import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from "../../categories";
import { CategoryService } from "../../service";
import { Transactions } from '../../transaction';
import { TransactionService } from '../../service';



function compare(a, b) {
  if (a.categoryid < b.categoryid) {
    return -1;
  }
  if (a.categoryid > b.categoryid) {
    return 1;
  }
  return 0;
};

function addByCat(pTransactions) {
  let totalPerCat = [];

  for (let i = 0; i < pTransactions.length; i++) {
    if (totalPerCat[pTransactions[i].Category] == null) {
      totalPerCat[pTransactions[i].Category] = pTransactions[i].Amount;
    }
    else {
      totalPerCat[pTransactions[i].Category] += pTransactions[i].Amount
    }
  }
  return totalPerCat;
}
let dataForTable = [];
function makeTableData(pOurTransactions, pOurCategories, pDataSource) {

  let totalPerCat = []
  totalPerCat = addByCat(pOurTransactions)
  for (let i = 0; i < totalPerCat.length; i++) {

    if (totalPerCat[i] != null) {
      dataForTable.push({ label: pOurCategories[i - 1].name, value: totalPerCat[i] })
    }
  }

  pDataSource.data = dataForTable;
}

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
  data: [{ label: "", value: 0 }]//dataForTable
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

  ourCategories: Category[];
  ourTransactions: Transactions[];
  promiseFn = () => {
    return new Promise((resolve, reject) => {
      this.getCatagories();
      resolve("it Worked.")
    })
  }
  promiseFn2 = () => {
    return new Promise((resolve, reject) => {
      this.getTransactions();
      resolve("it Worked too.")
    })
  }

  getCatagories(): void {
    this.myCategoryService.getAllCategories().subscribe((categoryData: Category[]) => {
      this.ourCategories = categoryData;
      this.ourCategories.sort(compare);
      makeTableData(this.ourTransactions, this.ourCategories, this.dataSource);

    })
  }
  getTransactions(): void {
    this.myTransactionService.getAllTransactions().subscribe((transactionData: Transactions[]) => {
      this.ourTransactions = transactionData;


    }
    )
  }
  async myAsync() {
    await this.promiseFn2()
    await this.promiseFn()
  }



  constructor(private myTransactionService: TransactionService, private myCategoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.myAsync();
  }

}
