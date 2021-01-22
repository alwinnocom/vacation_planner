import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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

}

