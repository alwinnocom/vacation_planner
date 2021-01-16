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

  @ViewChild('f') signupForm: NgForm;

  costs: { [key: string]: number } = { 'Food': 0, 'Hotel/Lodging': 0, 'Airfare': 0, 'Taxi': 0, 'Shopping': 0, 'Personal Expenses': 0, 'Other': 0 };

  totalCost: number = 0;

  onSubmit() {

  }

  ngOnChanges() {
    for (const [key, value] of Object.entries(this.costs)) {
      this.totalCost += value;
    }
  }

}
