import { Component, OnInit, ViewChild } from '@angular/core';

import { MatAccordion } from '@angular/material/expansion';
import { Checklist } from '../../models/checklist.model';

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-checklist-mobile',
  templateUrl: './checklist-mobile.component.html',
  styleUrls: ['./checklist-mobile.component.css']
})
export class ChecklistMobileComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  updated = true;
  failed = false;

  public mobileSize: boolean;

  constructor(public breakpointObserver: BreakpointObserver) { }

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

  public items: Checklist[] = [
    { name: "Essentials", iconName: "announcement", subcategories: ['Toiletries', 'Wallet', 'Phone', 'Credit Card', 'Cash'] },
    { name: "Airport", iconName: "flight_takeoff", subcategories: ['Passport', "Driver's License", 'Luggage', 'Ticket', 'Alarm'] },
    { name: "Clothes", iconName: "snowshoeing", subcategories: ['Shoes or Sandals', 'Socks', 'Pants or Shorts', 'Shirt', 'Sweater']},
    { name: "Electronics", iconName: "add_a_photo", subcategories: ['Camera', 'Cell Phone', 'Charger', 'Power Adapter', 'Laptop']},
    { name: "Health", iconName: "health_and_safety", subcategories: ['Medications', 'Sunblock', 'Vitamins', 'Insect Repellant', 'Toothbrush & Toothpaste']}
  ];

}
