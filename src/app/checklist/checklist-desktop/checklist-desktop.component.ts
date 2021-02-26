import { Component, OnInit } from '@angular/core';

import { Checklist } from '../../models/checklist.model';

@Component({
  selector: 'app-checklist-desktop',
  templateUrl: './checklist-desktop.component.html',
  styleUrls: ['./checklist-desktop.component.css']
})
export class ChecklistDesktopComponent implements OnInit {

  updated = true;
  failed = false;

  flaticonPath: string = 'assets/images/flaticon-checklist/svg';

  constructor() { }

  ngOnInit(): void {
  }

  public items: Checklist[] = [
    { name: "Essentials", flaticon: '001-checklist', iconName: "announcement", subcategories: ['Toiletries', 'Wallet', 'Phone', 'Credit Card', 'Cash'] },
    { name: "Airport", flaticon: '010-airport-2', iconName: "flight_takeoff", subcategories: ['Passport', "Driver's License", 'Luggage', 'Ticket', 'Alarm'] },
    { name: "Clothes", flaticon: '012-t-shirt', iconName: "snowshoeing", subcategories: ['Shoes or Sandals', 'Socks', 'Pants or Shorts', 'Shirt', 'Sweater']},
    { name: "Electronics", flaticon: '014-ipad', iconName: "add_a_photo", subcategories: ['Camera', 'Cell Phone', 'Charger', 'Power Adapter', 'Laptop']},
    { name: "Health", flaticon: '018-first-aid-kit', iconName: "health_and_safety", subcategories: ['Medications', 'Sunblock', 'Vitamins', 'Insect Repellant', 'Toothbrush & Toothpaste']}
  ];

}
