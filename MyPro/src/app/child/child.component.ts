import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  text = " " ;
  constructor() { }

  ngOnInit() {
  }

  fun(): void {
    this.text;
  }

}
