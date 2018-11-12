import { Component, OnInit, Renderer2, ElementRef, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { DoCheck } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { AfterViewChecked } from '@angular/core';

@Component({
  selector: 'ngx-carousel',
  templateUrl: './ngx-carousel.component.html',
  styleUrls: ['./ngx-carousel.component.scss']
})
export class NgxCarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  selectedIndex = 0; // 当前选中页
  ableClick = true; // 能否点击下一页
  _listenClick = []; // 监听事件
  _setTimeout = null; // setTimeout接受
  _setInterval = null; // setInterval接受
  calousel_width = 900; // 容器宽
  calousel_height = 250; // 容器高
  itemAlign = 'center'; // 'center' 'end' 'start'
  item_doms = []; // 所有轮播元素数组
  item_doms_bt = [];
  item_doms_length = 0;
  class_now_array = []; // 轮播当前状态序列号
  class_before_array = []; // 轮播上一个状态序列号

  // _handoverposition = 'inner'; // side bottom
  _showHandover = true;

  _options = {
    data: [], // 数据源
    type: 'flat', // 'cube'||'flat' 轮播类型
    showHandover: true, // 是否显示左右切换按钮
    handoverPosition: 'inner', // 左右切换按钮的位置  side:容器外  inner:容器内
    width: 900, // 容器宽
    height: 250, // 容器宽
    fmAlign: 'center', // 图片对齐方式,
    showDottedMenu: true, // 是否展示底部导航
    autoplay: true, // 是否自动播放
    interval: 2, // 自动播放间隔时间,
    dotteStyle: 'strip' // 底部导航类型
  };
  @Input()
  set options(value: object) {
    if (value instanceof Object) {
      this._options = Object.assign(this._options, value);
    }
  }

  get options() {
    return this._options;
  }

  @Output() clickHandle = new EventEmitter<{}>();
  constructor(
    private render: Renderer2,
    private element: ElementRef
  ) { }

  ngOnInit() {

  }


  ngAfterViewInit(): void {
    if (this._options.type === 'cube') {
      return;
    }

    if (this._options.data.length <= 4) {
      this.selectedIndex = 2;
    } else {
      this.selectedIndex = 3;
    }
    // 获取所有轮播卡
    this.item_doms = this.element.nativeElement.querySelectorAll('.ng-carousel-item');
    this.item_doms_length = this.item_doms.length;
    for (let i = 0; i < this.item_doms_length; i++) {
      this.class_now_array.push(i + 1);
    }

    // 添加class
    this.fn_domaddClass();
    // 添加监听事件
    this.fn_listenClick();

    if (this._options.autoplay) {
      this._setInterval = setInterval(() => {
        this.fn_next();
      }, 1000 * Number(this._options.interval));
    }


  }

  ngOnDestroy(): void {
    // 清楚定时任务
    clearTimeout(this._setTimeout);
    clearInterval(this._setInterval);
  }

  // 轮播下一项
  fn_next() {
    if (this.ableClick) {
      if (this._setInterval) {
        clearInterval(this._setInterval);
      }
      this.class_before_array = Object.assign([], this.class_now_array);
      const _shift = this.class_now_array.pop();
      this.class_now_array.unshift(_shift);
      this.fn_domRemoveClass();
      this.fn_domaddClass();
      this.fn_removelisten();
      this.fn_listenClick();
      this.ableClick = false;
      clearTimeout(this._setTimeout);
      this._setTimeout = setTimeout(() => {
        this.ableClick = true;
        if (this._options.autoplay) {
          this._setInterval = setInterval(() => {
            this.fn_next();
          }, 1000 * Number(this._options.interval));
        }
      }, 500);
    }
  }

  // 轮播上一项
  fn_previous() {
    if (this.ableClick) {
      if (this._setInterval) {
        clearInterval(this._setInterval);
      }
      this.class_before_array = Object.assign([], this.class_now_array);
      const _shift = this.class_now_array.shift();
      this.class_now_array.push(_shift);
      this.fn_domRemoveClass();
      this.fn_domaddClass();
      this.fn_removelisten();
      this.fn_listenClick();
      this.ableClick = false;
      clearTimeout(this._setTimeout);
      this._setTimeout = setTimeout(() => {
        this.ableClick = true;
        if (this._options.autoplay) {
          this._setInterval = setInterval(() => {
            this.fn_next();
          }, 1000 * Number(this._options.interval));
        }
      }, 500);
    }
  }

  // 轮播卡添加class
  fn_domaddClass() {
    for (let i = 0; i < this.item_doms_length; i++) {
      if (this._options.data.length <= 4) {
        // 判断轮播卡小于4项的时候另外处理
        this.render.addClass(this.item_doms[i], 's' + this.class_now_array[i]);
      }
      if (this._options.data.length > 4) {
        this.render.addClass(this.item_doms[i], 'p' + this.class_now_array[i]);
      }

    }
  }


  // 轮播卡移除class
  fn_domRemoveClass() {
    for (let i = 0; i < this.item_doms_length; i++) {
      if (this._options.data.length <= 4) {
        this.render.removeClass(this.item_doms[i], 's' + this.class_before_array[i]);
      }
      if (this._options.data.length > 4) {
        this.render.removeClass(this.item_doms[i], 'p' + this.class_before_array[i]);
      }
    }
  }

  // 动态给轮播卡设置监听事件
  fn_listenClick() {
    let _preview = null;
    let _next = null;
    let _center = null;
    if (this._options.data.length <= 4) {
      _preview = this.element.nativeElement.querySelectorAll('.s1');
      _center = this.element.nativeElement.querySelectorAll('.s2');
      _next = this.element.nativeElement.querySelectorAll('.s3');
    }

    if (this._options.data.length > 4) {
      _preview = this.element.nativeElement.querySelectorAll('.p2');
      _center = this.element.nativeElement.querySelectorAll('.p3');
      _next = this.element.nativeElement.querySelectorAll('.p4');
    }
    if (_preview && _preview[0]) {
      this._listenClick[0] = this.render.listen(_preview[0], 'click', this.fn_previous.bind(this));
    }

    if (_next && _next[0]) {
      this._listenClick[1] = this.render.listen(_next[0], 'click', this.fn_next.bind(this));
    }


    if (_center && _center[0]) {
      this._listenClick[2] = this.render.listen(_center[0], 'click', () => {
        this.clickHandle.emit(this.selectedIndex);
      });
    }

  }

  // 移除监听事件
  fn_removelisten() {
    for (const entry of this._listenClick) {
      if (entry) {
        entry();
      }
    }
  }

  // selectIndex改变（底部导航改变）
  fn_selectChange(index) {
    // 清楚自动播放
    if (this._setInterval) {
      clearInterval(this._setInterval);
    }
    if (this._options.data.length <= 4) {
      this.class_before_array = Object.assign([], this.class_now_array);
      if (index - 2 < 0) {
        const _concat = this.class_now_array.splice(0, -(index - 2));
        this.class_now_array = this.class_now_array.concat(_concat);
        console.log(this.class_now_array);
      }
      if (index - 2 > 0) {
        const _concat = this.class_now_array.splice(this.item_doms_length - (index - 2), index - 2);
        this.class_now_array = _concat.concat(this.class_now_array);
        console.log(this.class_now_array);
      }
      this.fn_domRemoveClass();
      this.fn_domaddClass();
      this.fn_removelisten();
      this.fn_listenClick();
    } else {
      this.class_before_array = Object.assign([], this.class_now_array);
      if (index - 3 < 0) {
        const _concat = this.class_now_array.splice(0, -(index - 3));
        this.class_now_array = this.class_now_array.concat(_concat);
        console.log(this.class_now_array);
      }
      if (index - 3 > 0) {
        const _concat = this.class_now_array.splice(this.item_doms_length - (index - 3), index - 3);
        this.class_now_array = _concat.concat(this.class_now_array);
        console.log(this.class_now_array);
      }
    }

    this.fn_domRemoveClass();
    this.fn_domaddClass();
    this.fn_removelisten();
    this.fn_listenClick();
    // 添加自动播放
    if (this._options.autoplay) {
      this._setInterval = setInterval(() => {
        this.fn_next();
      }, 1000 * Number(this._options.interval));
    }
  }
}
