import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  updated = true;
  failed = false;

  constructor() { }

  ngOnInit(): void {
  }

  items: String[] = [ 'Toiletries', 'Clothes', 'Wallet', 'Phone' ];

  onSubmit() {
    console.log("Do nothing.");
  }
}
