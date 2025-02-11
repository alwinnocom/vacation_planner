import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription }  from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { CostsModel } from '../models/costs.model';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.css']
})

export class CostsComponent implements OnInit, OnDestroy {

  // Vacation Expenses pt 1 - https://www.listplanit.com/list-of-expenses-to-include-in-a-travel-budget/
  // Vacation Expenses pt 2 - https://www.lifehack.org/895450/how-to-pay-off-credit-card

  flaticonPath: string = 'assets/images/flaticon-costs/svg';

  public costs: CostsModel[] = [
    {name: "Food", flaticon: '009-food', iconName: 'fastfood', value: 0 },
    {name: "Hotel/Lodging", flaticon: '011-hotel', iconName: 'hotel', value: 0},
    {name: "Airfare", flaticon: '007-airport', iconName: 'flight', value: 0 },
    { name: "Transportation", flaticon: '036-taxi', iconName: 'commute', value: 0 },
    {name: "Shopping", flaticon: '037-shop-1', iconName: 'shopping_cart', value: 0},
    {name: "Entertainment", flaticon: '030-purpose-1', iconName: 'surfing', value: 0},
    {name: "Emergency", flaticon: '026-ambulance', iconName: 'warning', value: 0},
    {name: "Other", flaticon: '034-bill-2', iconName: 'add_task', value: 0}
  ];

  public costsUpdated: string = "";
  public newValue: string = "";

  public timeoutCounter: number = 0;
  public costIndex: number = -1;

  public totalCost: number = 0;
  public updated = false;
  public failed = false;
  public mobileSize: boolean;
  public desktopSize: string;

  // RxJS Debounce code - https://stackoverflow.com/questions/32051273/angular-and-debounce/36849347#36849347
  // Without debouncing, ngModel updates immediately when the user types a number, which prevents the user from typing more than 1 number in the input field.
  public costsModelChanged: Subject<number> = new Subject<number>();
  public costsModelChangeSubscription: Subscription

  constructor(
    public breakpointObserver: BreakpointObserver,
    private _snackBar: MatSnackBar
  ) {  }

  // Snackbar = https://material.angular.io/components/snack-bar/overview
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 20000,
    });
  }

  ngOnInit(): void {

    this.breakpointObserver
      .observe(['(max-width: 686px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobileSize = true;
        } else {
          this.mobileSize = false;
        }
      });

    this.breakpointObserver
      .observe(['(max-width: 1000px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.desktopSize = 'tablet';
        } else {
          this.desktopSize = 'desktop';
        }
      });

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

    if (this.updated) {
      this.openSnackBar(`Your vacation costs $${ this.totalCost }`, "Okay");
      this.failed = false;
    }

    else {
      this.openSnackBar("We're sorry. Please remove your response and try again.", "Okay");
    }
  }

}
