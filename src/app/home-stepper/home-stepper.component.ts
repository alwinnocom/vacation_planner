import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-stepper',
  templateUrl: './home-stepper.component.html',
  styleUrls: ['./home-stepper.component.css']
})
export class HomeStepperComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void { }

  stepper: String[] = ["This is not what stepper does.",
    "This is a placeholder for home-stepper.component.html so Angular does not trigger an error.",
    "The actual stepper is #stepper in home.component.html.",
    "Let Angular Material do its thing with #stepper."
  ]
}
