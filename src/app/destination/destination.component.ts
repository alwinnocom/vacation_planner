import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  departure_point: String = "LAX";
  destination: String = "NY";



}
