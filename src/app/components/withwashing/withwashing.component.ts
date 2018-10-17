import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withwashing',
  templateUrl: './withwashing.component.html',
  styleUrls: ['./withwashing.component.css']
})
export class WithwashingComponent implements OnInit {

  constructor() {     console.log("cons");}

  ngOnInit() {
    console.log("pp");
  }


}
