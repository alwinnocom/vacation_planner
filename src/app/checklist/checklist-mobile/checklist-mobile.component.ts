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

  flaticonPath: string = 'assets/images/flaticon-checklist/svg';

  public items: Checklist[] = [
    { name: "Essentials", flaticon: '001-checklist', iconName: "announcement", subcategories: ['Toiletries', 'Wallet', 'Phone', 'Credit Card', 'Cash'] },
    { name: "Airport", flaticon: '010-airport-2', iconName: "flight_takeoff", subcategories: ['Passport', "Driver's License", 'Luggage', 'Ticket', 'Alarm'] },
    { name: "Clothes", flaticon: '012-t-shirt', iconName: "snowshoeing", subcategories: ['Shoes or Sandals', 'Socks', 'Pants or Shorts', 'Shirt', 'Sweater']},
    { name: "Electronics", flaticon: '014-ipad', iconName: "add_a_photo", subcategories: ['Camera', 'Cell Phone', 'Charger', 'Power Adapter', 'Laptop']},
    { name: "Health", flaticon: '018-first-aid-kit', iconName: "health_and_safety", subcategories: ['Medications', 'Sunblock', 'Vitamins', 'Insect Repellant', 'Toothbrush & Toothpaste']}
  ];

}
