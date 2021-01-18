import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.css']
})

export class CostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  costs: { [key: string]: number; } = { 'Food': 0, 'Hotel/Lodging': 0, 'Airfare': 0, 'Taxi': 0, 'Shopping': 0, 'Personal Expenses': 0, 'Other': 0 };
  totalCost: number = 0;
  updated = false;

  // https://stackoverflow.com/questions/16449295/how-to-sum-the-values-of-a-javascript-object
  setTotalCost() {
    this.totalCost = 0;

    for (const cost in this.costs) {
      this.totalCost += this.costs[cost];
    }
  }

  onSubmit() {
    this.updated = true;
    this.setTotalCost();
  }

}
