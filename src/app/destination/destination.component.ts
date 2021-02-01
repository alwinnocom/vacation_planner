import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, Subscription }  from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})

export class DestinationComponent implements OnInit, OnDestroy {

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


  public mobileSize: boolean;
  constructor(public breakpointObserver: BreakpointObserver) {}

  public startDateChanged = new Subject();
  public startDateChangeSubscription: Subscription

  public endDateChanged = new Subject();
  public endDateChangeSubscription: Subscription

  public departurePointChanged: Subject<string> = new Subject<string>();
  public departurePointChangeSubscription: Subscription

  public destinationChanged: Subject<string> = new Subject<string>();
  public destinationChangeSubscription: Subscription

  public returnViaChanged: Subject<string> = new Subject<string>();
  public returnViaChangeSubscription: Subscription

  public returnPointChanged: Subject<string> = new Subject<string>();
  public returnPointChangeSubscription: Subscription

  start_date = null;
  end_date = null;

  departure_point: string = "";
  destination: string = "";

  return_via: string = "";
  return_point: string = "";


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

    this.startDateChangeSubscription = this.startDateChanged
      .pipe(
        debounceTime(1000),
      )
      .subscribe(startDate => {
        this.start_date = startDate;
      });

    this.endDateChangeSubscription = this.endDateChanged
      .pipe(
        debounceTime(1000),
      )
      .subscribe(endDate => {
        this.end_date = endDate;
      });

    this.departurePointChangeSubscription = this.departurePointChanged
      .pipe(
        debounceTime(1000),
      )
      .subscribe(departurePoint => {
        this.departure_point = departurePoint;
      });

    this.destinationChangeSubscription = this.destinationChanged
      .pipe(
        debounceTime(1000),
      )
      .subscribe(destination => {
        this.destination = destination;
      });

    this.returnViaChangeSubscription = this.returnViaChanged
      .pipe(
        debounceTime(1000),
      )
      .subscribe(returnVia => {
        this.return_via = returnVia;
      });

    this.returnPointChangeSubscription = this.returnPointChanged
      .pipe(
        debounceTime(1000),
      )
      .subscribe(returnPoint => {
        this.return_point = returnPoint;
      });
  }

  ngOnDestroy() {
    this.startDateChangeSubscription.unsubscribe();
    this.endDateChangeSubscription.unsubscribe();
    this.departurePointChangeSubscription.unsubscribe();
    this.destinationChangeSubscription.unsubscribe();
    this.returnViaChangeSubscription.unsubscribe();
    this.returnPointChangeSubscription.unsubscribe();
  }
}
