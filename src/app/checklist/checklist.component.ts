import { Component, OnInit, ViewChild } from '@angular/core';
import { Checklist } from '../models/checklist.model';

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatAccordion } from '@angular/material/expansion';


@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

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

  public items: Checklist[] = [
    { name: "Essentials", iconName: "announcement", subcategories: ['Toiletries', 'Clothes', 'Wallet', 'Phone', 'Credit Card', 'Cash'] },
    { name: "Airport", iconName: "flight_takeoff", subcategories: ['Alarm', 'Passport', "Driver's License", 'Luggage', 'Ticket'] },
    { name: "Clothes", iconName: "snowshoeing", subcategories: ['Shoes or Sandals', 'Socks', 'Belt', 'Pants or Shorts', 'Shirt', 'Sweater']},
    { name: "Electronics", iconName: "add_a_photo", subcategories: ['Camera', 'Cell Phone', 'Charger', 'Power Adapter', 'Laptop']},
    { name: "Health", iconName: "health_and_safety", subcategories: ['Medications', 'Sunblock', 'Vitamins', 'Insect Repellant', 'Toothbrush & Toothpaste']}
  ];

}
