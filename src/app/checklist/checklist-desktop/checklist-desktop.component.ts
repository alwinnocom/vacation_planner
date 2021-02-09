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

  constructor() { }

  ngOnInit(): void {
  }

  public items: Checklist[] = [
    { name: "Essentials", iconName: "announcement", subcategories: ['Toiletries', 'Wallet', 'Phone', 'Credit Card', 'Cash'] },
    { name: "Airport", iconName: "flight_takeoff", subcategories: ['Passport', "Driver's License", 'Luggage', 'Ticket', 'Alarm'] },
    { name: "Clothes", iconName: "snowshoeing", subcategories: ['Shoes or Sandals', 'Socks', 'Pants or Shorts', 'Shirt', 'Sweater']},
    { name: "Electronics", iconName: "add_a_photo", subcategories: ['Camera', 'Cell Phone', 'Charger', 'Power Adapter', 'Laptop']},
    { name: "Health", iconName: "health_and_safety", subcategories: ['Medications', 'Sunblock', 'Vitamins', 'Insect Repellant', 'Toothbrush & Toothpaste']}
  ];

}
