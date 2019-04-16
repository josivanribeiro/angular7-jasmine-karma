import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular7-unit-testing!';

  emoji: string;

  onClick() {
    this.emoji = '😜';
  }

  constructor() {}
  ngOnInit() {}
}