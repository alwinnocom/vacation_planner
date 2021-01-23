import { Component, OnInit } from '@angular/core';
import { Checklist } from '../models/checklist.model';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  updated = true;
  failed = false;

  constructor() { }

  ngOnInit(): void {
  }

  public items: Checklist[] = [ {
     name: "Essentials", subcategories: ['Toiletries', 'Clothes', 'Wallet', 'Phone']
    }, { name: "Airport", subcategories: ['Passport', 'Luggage', 'Ticket'] }
  ];

}
