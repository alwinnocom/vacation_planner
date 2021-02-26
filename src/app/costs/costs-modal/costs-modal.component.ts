import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-costs-modal',
  templateUrl: './costs-modal.component.html',
  styleUrls: ['./costs-modal.component.css']
})
export class CostsModalComponent implements OnInit {

  flaticonPath: string = 'assets/images/flaticon-costs/svg';
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


}
