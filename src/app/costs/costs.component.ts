import { Component, OnInit } from '@angular/core';
import { Subject }  from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.css']
})

export class CostsComponent implements OnInit {

  constructor() {  }

  // Back to my code.
  ngOnInit(): void {

  }

  costs: { [key: string]: number; } = { 'Food': 0, 'Hotel/Lodging': 0, 'Airfare': 0, 'Taxi': 0, 'Shopping': 0, 'Personal Expenses': 0, 'Other': 0 };

  totalCost: number = 0;
  updated = false;

  // https://stackoverflow.com/questions/16449295/how-to-sum-the-values-of-a-javascript-object

  // setTotalCost() doesn't work because you need the following code: [(ngModel)] = "costs[cost.key]". This updates the costs object's value based on the key.
  // The ngModel code above does not work because the code immediately updates the costs object. Debounce operator from RxJS is required, but it was not implemented successfully.
  // If asked why this does not work, simply explain the reality of Angular RxJS debouncing and the fact that ng-model-options is only an AngularJS feature.
  // https://stackoverflow.com/questions/32051273/angular-and-debounce/36849347#36849347

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
