import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, Subscription }  from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { MatAccordion } from '@angular/material/expansion';


@Component({
  selector: 'app-destination-mobile',
  templateUrl: './destination-mobile.component.html',
  styleUrls: ['./destination-mobile.component.css']
})

export class DestinationMobileComponent implements OnInit, OnDestroy {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  flaticonPath: string = 'assets/images/flaticon-destination/svg';

  vacationControl = new FormControl();
  vacationGroups = [

    {
      name: 'Covid-19 Personal Status',
      flaticon: '028-medical-mask',
      disabled: false,
      vacation: [
        {value: 'vaccinated', viewValue: 'Vaccinated', viewColor: 'green'},
        {value: 'at-risk', viewValue: 'At-Risk'},
        {value: 'sick', viewValue: 'Sick'}
      ]
    },

    {
      name: 'Purpose',
      flaticon: '029-purpose',
      vacation: [
        {value: 'travel_blog', viewValue: 'Travel Blog'},
        {value: 'business', viewValue: 'Business'},
        {value: 'tourist', viewValue: 'Tourist'},
      ]
    },

    {
      name: 'Previously Visited...',
      flaticon: '034-location',
      vacation: [
        {value: 'very-often', viewValue: '5-10+ times'},
        {value: 'often', viewValue: '3-4 times'},
        {value: 'rarely', viewValue: '1-2 times'},
        {value: 'newcomer', viewValue: 'Never visited before.'}
      ]
    },
    {
      name: 'Interests',
      flaticon: '042-mental-health',
      vacation: [
        {value: 'exploration', viewValue: 'Exploration'},
        {value: 'culture', viewValue: 'Culture'},
        {value: 'dining', viewValue: 'Dining'},
        {value: 'shopping', viewValue: 'Shopping'},
        {value: 'late-night', viewValue: 'Late-Night'},
        {value: 'indoors', viewValue: 'Indoors'},
        {value: 'outdoors', viewValue: 'Outdoors'},
      ]
    },
    {
      name: 'Adventure',
      flaticon: '036-mountain',
      vacation: [
        {value: "Hero's Journey", viewValue: "Hero's Journey"},
        {value: 'adventurous', viewValue: 'Adventurous'},
        {value: 'cautious', viewValue: 'Curious'},
        {value: 'relaxed', viewValue: 'Relaxed'}
      ]
    },
    {
      name: 'Seasons',
      flaticon: '038-season',
      vacation: [
        {value: 'winter', viewValue: 'Winter'},
        {value: 'spring', viewValue: 'Spring'},
        {value: 'summer', viewValue: 'Summer'},
        {value: 'autumn', viewValue: 'Autumn'}
      ]
    }
  ];


  constructor() {}

  public startDateChanged = new Subject();
  public startDateChangeSubscription: Subscription

  public endDateChanged = new Subject();
  public endDateChangeSubscription: Subscription

  public departurePointChanged: Subject<string> = new Subject<string>();
  public departurePointChangeSubscription: Subscription

  public destinationChanged: Subject<string> = new Subject<string>();
  public destinationChangeSubscription: Subscription

  start_date = null;
  end_date = null;

  departure_point: string = "";
  destination: string = "";

  return_via: string = "";
  return_point: string = "";


  ngOnInit(): void {

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
  }

  ngOnDestroy() {
    this.startDateChangeSubscription.unsubscribe();
    this.endDateChangeSubscription.unsubscribe();
    this.departurePointChangeSubscription.unsubscribe();
  }
}
