import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { debug } from 'util';

@Component({
  selector: 'ngx-carousel-cube',
  templateUrl: './ngx-carousel-cube.component.html',
  styleUrls: ['./ngx-carousel-cube.component.scss']
})
export class NgxCarouselCubeComponent implements OnInit, OnDestroy {
  rotateDegree = 0; // 旋转角度;
  ableClick = true;
  _setTimeout = null;
  _setInterval = null;

  selectIndex = 0; // 当前显示的图片
  nextIndex = 0; // 下一个选择的index

  face = 1; // 当前面
  nextface = 1; // 下一面

  _options = {
    data: [], // 数据源
    showHandover: true, // 是否显示左右切换按钮
    width: 900, // 容器宽
    height: 250, // 容器宽
    autoplay: true, // 是否自动播放
    interval: 2, // 自动播放间隔时间
    ifShadow: true, // 是否显示底部阴影
    showDottedMenu: true, // 是都展示底部的
    dotteStyle: 'circle'  // 底部导航样式 circle || strip
  };

  // 初始化立方体
  _styleObject = {
    imgWidthAndHeight: {
    },
    faceRight: {},
    faceLeft: {},
    faceFront: {},
    faceTop: {},
    faceBack: {},
    faceBottom: {}
  };

  // 轮播数据源
  imgs_queue = [];

  // 前后上下四个面的State
  faceState = [
    {
      faceId: 1,
      selected: true, // 是否选择当前面向
      imgurl: '' // 每面的图片源
    },
    {
      faceId: 2,
      selected: false,
      imgurl: ''
    },
    {
      faceId: 3,
      selected: false,
      imgurl: ''
    },
    {
      faceId: 4,
      selected: false,
      imgurl: ''
    }
  ];

  @Input()
  set options(value: any) {
    if (value instanceof Object) {
      this._options = Object.assign(this._options, value);
      this.imgs_queue = this._options.data;

    }
  }

  get options() {
    return this._options;
  }

  @Output() clickHandle = new EventEmitter<{}>();
  constructor() {

  }

  ngOnInit() {
    // 构造数据
    this._styleObject = {
      imgWidthAndHeight: {
      },
      faceRight: {
        width: (this._options.height - 80) + 'px',
        height: (this._options.height - 80) + 'px',
        transform: 'rotateY(90deg)translateZ(' + (-(this._options.width - 160) / 10 / 2) + 'px)'
      },
      faceLeft: {
        width: (this._options.height - 80) + 'px',
        height: (this._options.height - 80) + 'px',
        transform: 'rotateY(-90deg)translateZ(' + (this._options.height - 80) / 2 + 'px)'
      },
      faceFront: { transform: 'translateZ(' + (this._options.height - 80) / 2 + 'px)' },
      faceTop: { transform: 'rotateX(-90deg)translateZ(' + (this._options.height - 80) / 2 + 'px)' },
      faceBack: { transform: 'rotateY(180deg)rotate(180deg)translateZ(' + (this._options.height - 80) / 2 + 'px)' },
      faceBottom: { transform: 'rotateX(90deg)translateZ(' + (this._options.height - 80) / 2 + 'px)' }
    };
    // 判断是否自动播放
    if (this._options.autoplay) {
      this._setInterval = setInterval(() => {
        this.fn_rotateNext();
      }, this._options.interval * 1000);
    }

    // 初始化设置四个面向的图片数据
    this.fn_getImg();
  }

  ngOnDestroy(): void {
    // 组建销毁清空计时对象
    clearInterval(this._setInterval);
    clearTimeout(this._setTimeout);
  }

  // 旋转-90
  fn_rotateNext(nextIndex?) {
    console.log('before');
    console.log(this.faceState);
    if (!this.ableClick) {
      return;
    }

    // 判断下一次旋转的面向
    this.face = this.nextface;
    this.nextface = (this.face + 1) > 4 ? 1 : (this.face + 1);

    // 改变下一次选择的Index
    this.selectIndex = this.nextIndex;

    if (nextIndex !== undefined) {
      this.nextIndex = nextIndex;
    } else {
      this.nextIndex = (this.nextIndex + 1) >= this.imgs_queue.length ? 0 : (this.nextIndex + 1);
    }

    this.fn_changeState();
    this.fn_getImg();

    // 设置自动播放
    if (this._setInterval) {
      clearInterval(this._setInterval);
    }
    this.ableClick = false;
    this.rotateDegree -= 90;
    this.fn_ableClick();
    console.log('介绍之后我来看看结果');
    console.log(this.selectIndex);
  }

  // 旋转90;
  fn_rotatePreview(nextIndex?) {
    console.log(this.imgs_queue);
    if (!this.ableClick) {
      return;
    }

    // 判断下一次旋转的面向
    this.face = this.nextface;
    this.nextface = (this.face - 1) <= 0 ? 4 : (this.face - 1);

    // 改变下一次选择的Index
    this.selectIndex = this.nextIndex;
    if (nextIndex !== undefined) {
      this.nextIndex = nextIndex;
    } else {
      this.nextIndex = (this.nextIndex - 1) < 0 ? (this.imgs_queue.length - 1) : (this.nextIndex - 1);
    }

    this.fn_changeState();
    this.fn_getImg();

    if (this._setInterval) {
      // 手动触发播放之后应该清空自动播放进程（暂停）,等待手动触发播放完成之后在开启自动播放进程
      clearInterval(this._setInterval);
    }
    this.ableClick = false;
    this.rotateDegree += 90;
    this.fn_ableClick();
    console.log('介绍之后我来看看结果');
    console.log(this.selectIndex);
  }

  // 改变按钮的可点击状态并清空计时器，重新设置自动播放
  fn_ableClick() {
    this._setTimeout = setTimeout(() => {
      this.ableClick = true;
      // 重新设置自动播放
      if (this._options.autoplay) {
        this._setInterval = setInterval(() => {
          this.fn_rotateNext();
        }, this._options.interval * 1000);
      }
      clearTimeout(this._setTimeout);
    }, 1300);
  }


  // 改变每一面的state
  fn_changeState() {

    this.faceState.forEach((item) => {
      if (item.faceId === this.nextface) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
  }


  // 改变每面数据
  fn_getImg() {
    this.faceState.forEach((item) => {
      if (item.selected) {
        item.imgurl = this.imgs_queue[this.nextIndex];
      } else {
        item.imgurl = this.imgs_queue[this.selectIndex];
      }
    });
    const array = Object.assign([], this.faceState);
    this.faceState = array;
  }

  // 底部菜单导航
  fn_linkToFace(index) {
    console.log(index);
    console.log(this.selectIndex);
    if (index >= this.nextIndex || (this.nextIndex === (this.imgs_queue.length - 1) && index === 0)) {
      this.fn_rotateNext(index);
    } else {
      this.fn_rotatePreview(index);
    }
  }

  // 点击冒泡事件
  fn_clickOutPut() {
    this.clickHandle.emit(this.nextIndex);
  }
}
