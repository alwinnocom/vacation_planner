import { Component, OnInit } from '@angular/core';
import { Checklist } from '../models/checklist.model';

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  updated = true;
  failed = false;

  public mobileSize: boolean;
  constructor(public breakpointObserver: BreakpointObserver) {}

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

  }

  public items: Checklist[] = [ {
     name: "Essentials", iconName: "announcement", subcategories: ['Toiletries', 'Clothes', 'Wallet', 'Phone']
    }, { name: "Airport", iconName: "flight_takeoff", subcategories: ['Passport', 'Luggage', 'Ticket'] }
  ];

}
