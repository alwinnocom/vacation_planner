import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Tile } from '../models/home-tile.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLinear = false;

  // CSS @media queries do NOT work in Angular.
  // Use *ngIf @angular/cdk/layout instead: https://stackoverflow.com/questions/48628220/using-proper-css-media-queries-in-angular

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

  imgPath: string = "assets/images"

  tiles: Tile[] = [
    {text: "Picture of generated person's face", cols: 1, rows:1, color: 'lightblue'},
    {text: "If I were a real person, I would give a 5-star rating for 5-star planning!", cols: 2, rows:1, color: 'lightgreen'},
    {text: "I am also not a real person, but this app is really good.", cols: 2, rows:1, color: 'lightpink'},
    {text: "Picture of generated person's face", cols: 1, rows:1, color: 'lightblue'},
    {text: "Picture of generated person's face", cols: 2, rows:1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows:1, color: 'lightpink'}
  ];

}
