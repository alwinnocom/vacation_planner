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
    {text: "Daisy Harley", imgSource: "assets/images/multi-colored-hair-testimonial.jpg", cols: 1, rows:1, color: 'lightblue'},
    {text: "If I were a real person, I would give a 5-star rating for 5-star planning!", imgSource: '', cols: 2, rows:1, color: 'white'},
    {text: "I am also not a real person, but this app is really good.", imgSource: '', cols: 2, rows:1, color: 'white'},
    {text: "Daisy Harley", imgSource: "assets/images/multi-colored-hair-testimonial.jpg", cols: 1, rows:1, color: 'lightgreen'},
    {text: "Daisy Harley", imgSource: "assets/images/multi-colored-hair-testimonial.jpg", cols: 1, rows:1, color: 'lightpurple'},
    {text: "I believe I'm real, and I know this app is fantastic!", imgSource: '', cols: 2, rows:1, color: 'white'}
  ];

}
