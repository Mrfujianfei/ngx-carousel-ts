import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  data = [
    'assets/a1.jpeg',
    'assets/a2.jpeg',
    'assets/a3.jpeg',
    'assets/a4.jpeg',
    'assets/a5.jpeg',
    'assets/a6.jpeg',
  ];

  options = {
    data: this.data,
    type: 'flat',
    width: 900,
    height: 250,
    fmAlign: 'center',
    showHandover: true,
    handoverPosition: 'side',
    showDottedMenu: true,
    autoplay: false, // 是否自动播放
    interval: 4, // 自动播放间隔时间; 秒,
    ifShadow: true,
  };

  dosomething($event) {
  }
}
