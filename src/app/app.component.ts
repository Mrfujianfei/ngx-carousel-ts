import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  data = [
    'assets/天策2.jpg',
    'assets/天策3.jpg',
    'assets/天策4.jpg',
    'assets/天策5.jpg',
    'assets/天策6.jpg',
  ];

  options = {
    data: this.data,
    width: 1200,
    height: 300,
    fmAlign: 'center',
    showHandover: true,
    handoverPosition: 'side',
    showDottedMenu: true
  };
}
