import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.html',
})
export class AppComponent {
  data = [
    'assets/a1.jpg', 
    'assets/a2.jpg',
    'assets/a3.jpg',
    'assets/a4.jpg',
    'assets/a5.jpg',
  ];

  options_flat = {
    data: this.data, // 数据源
    type: 'flat', // 'cube'||'flat' 轮播类型
    showHandover: true, // 是否显示左右切换按钮
    handoverPosition: 'side', // 左右切换按钮的位置  side:容器外  inner:容器内
    width: 850, // 容器宽
    height: 250, // 容器宽
    fmAlign: 'center', // 图片对齐方式,
    showDottedMenu: true, // 是否展示底部导航
    autoplay: true, // 是否自动播放
    interval: 2, // 自动播放间隔时间,
    dotteStyle: 'strip' // 底部导航类型 'circle'|| 'strip'
  };

  options_cube = {
    data: this.data, // 数据源
    type: 'cube', // 'cube'||'flat' 轮播类型
    showHandover: false, // 是否显示左右切换按钮
    width: 600, // 容器宽
    height: 300, // 容器宽
    showDottedMenu: true, // 是否展示底部导航
    autoplay: true, // 是否自动播放
    interval: 2, // 自动播放间隔时间（秒）,
    dotteStyle: 'circle', // 底部导航类型 'circle'|| 'strip'
    ifShadow: true, // 底部阴影
  };
}
