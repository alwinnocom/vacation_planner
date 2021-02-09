import { Component, OnInit, ViewChild } from '@angular/core';

import { MatAccordion } from '@angular/material/expansion';

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';



@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  public mobileSize: boolean;
  public desktopSize: string;

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

    this.breakpointObserver
      .observe(['(max-width: 1000px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.desktopSize = 'tablet';
        } else {
          this.desktopSize = 'desktop';
        }
      });

  }

}
