import { Component, OnInit } from '@angular/core';
import { Tile } from '../../models/home-tile.model';

@Component({
  selector: 'app-home-testimonial',
  templateUrl: './home-testimonial.component.html',
  styleUrls: ['./home-testimonial.component.css']
})
export class HomeTestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgPath: string = "assets/images"

  testimonialTiles: Tile[] = [
    {text: "Beth Harmon", imgSource: "assets/images/beth-harmon-testimonial.jpg", cols: 1, rows:1 },
    {text: '"I may not be a real person, but I think this app is really awesome! It gives me all the assistance I need for my apocryphal journey."  - Beth Harmon', imgSource: '', cols: 2, rows:1 },
    {text: "“Rendezvous lets me rest and relax by turning my fantasy into my itenerary.” - Daisy Harley", imgSource: '', cols: 2, rows:1 },
    {text: "Daisy Harley", imgSource: "assets/images/daisy-harley-testimonial.jpg", cols: 1, rows:1 },
    {text: "Sam Wilson", imgSource: "assets/images/sergio-paula-testimonial.jpg", cols: 1, rows:1 },
    {text: "“I’ve been looking for an all-in-one vacation planner all my life. Now, I can finally take a vacation from planning for vacations.” - Sam Wilson", imgSource: '', cols: 2, rows:1 }
  ];

}
