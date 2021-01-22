import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription }  from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { CostsModel } from '../models/costs.model';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.scss']
})

export class CostsComponent implements OnInit, OnDestroy {

  // Vacation Expenses pt 1 - https://www.listplanit.com/list-of-expenses-to-include-in-a-travel-budget/
  // Vacation Expenses pt 2 - https://www.lifehack.org/895450/how-to-pay-off-credit-card

  public food: CostsModel = { name: "Food", value: 0 };
  public hotel: CostsModel = { name: "Hotel/Lodging", value: 0 };
  public airfare: CostsModel = { name: "Airfare", value: 0 };
  public transportation: CostsModel = { name: "Taxi", value: 0 };
  public shopping: CostsModel = { name: "Shopping", value: 0 };
  public personalExpenses: CostsModel = { name: "Personal Expenses", value: 0 };
  public other: CostsModel = { name: "Other", value: 0 };

  public costs: CostsModel[] = [ this.food, this.hotel, this.airfare, this.transportation, this.shopping, this.personalExpenses, this.other ];
  public timeoutCounter: number = 0;
  public costIndex: number = -1;

  public totalCost: number = 0;
  public updated = false;
  public failed = false;

  // RxJS Debounce code - https://stackoverflow.com/questions/32051273/angular-and-debounce/36849347#36849347
  // Without debouncing, ngModel updates immediately when the user types a number, which prevents the user from typing more than 1 number in the input field.
  public costsModelChanged: Subject<number> = new Subject<number>();
  public costsModelChangeSubscription: Subscription

  constructor() {  }

  ngOnInit(): void {
    this.costsModelChangeSubscription = this.costsModelChanged
      .pipe(
        debounceTime(1000),
      )
      .subscribe(updatedCost => {

        // If costIndex is not updated, then wait 0.5-1.5 seconds.
        while (this.costIndex === -1 && this.timeoutCounter < 4) {
          setTimeout(() => {console.log("Wait for update.")}, 500);

          this.timeoutCounter++;
        }



        // Update the correct variable in the "costs" array by using the index position retrieved from the (click) event binding.

        if (this.costIndex !== -1) {
          this.costs[this.costIndex].value = updatedCost;
          console.log(updatedCost);

          this.failed = false;
        }

        else {
          this.updated = false;
          this.failed = true;
        }

        this.costIndex = -1;
        this.timeoutCounter = 0;
      });
  }

  ngOnDestroy() {
    this.costsModelChangeSubscription.unsubscribe();
  }

  // Save index position of array in Typescript = https://stackoverflow.com/questions/49123807/angular-get-current-index-in-ngfor
  setCostIndex(newIndex: number) {
    this.costIndex = newIndex;
  }

  // Back to my code.
  setTotalCost() {
    this.totalCost = 0;

    for (let i = 0; i < this.costs.length; i++) {
      this.totalCost += this.costs[i].value;
    }
  }

  onSubmit() {
    this.updated = true;
    this.setTotalCost();
  }

}
