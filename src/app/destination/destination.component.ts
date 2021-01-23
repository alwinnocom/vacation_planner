import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription }  from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  constructor() { }

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


  ngOnInit(): void {



  }

  start_date = "";
  end_date = "";

  departure_point: string = "where?";
  destination: string = "where?";

  return_via: string = "where?";
  return_point: string = "where?";

  userInput: string = "";



  onDepart() {

  }

  onReturn() {

  }
}
