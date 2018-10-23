import { Component, OnInit, Renderer2, ElementRef, ViewChild, Input } from '@angular/core';
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
export class NgxCarouselComponent implements OnInit, AfterViewInit {
  selectedIndex = 0;
  ableClick = true;
  _listenClick = [];
  _setTimeout = null;
  calousel_width = 900; // 容器宽
  calousel_height = 250; // 容器高
  itemAlign = 'center'; // 'center' 'end' 'start'
  item_doms = [];
  item_doms_bt = [];
  item_doms_length = 0;
  class_now_array = [];
  class_before_array = [];
  // _handoverposition = 'inner'; // side bottom
  _showHandover = true;

  _options = {
    data: [], // 数据源
    showHandover: true, // 是否显示左右切换按钮
    handoverPosition: 'inner', // 左右切换按钮的位置  side:容器外  inner:容器内
    width: 900, // 容器宽
    height: 250, // 容器宽
    fmAlign: 'center', // 图片对齐方式,
    showDottedMenu: true,

  };
  @Input()
  set options(value: object) {
    if (value instanceof Object) {
      this._options = Object.assign({
        data: [], // 数据源
        showHandover: true, // 是否显示左右切换按钮
        handoverPosition: 'inner', // 左右切换按钮的位置  side:容器外  inner:容器内
        width: 900, // 容器宽
        height: 250, // 容器宽
        fmAlign: 'center', // 图片对齐方式,
        showDottedMenu: true, // 是否展示底部的munu
      }, value);
    }
  }

  get options() {
    return this._options;
  }

  // @Input()
  // set showHandover(value: boolean) {
  //   this._showHandover = value;
  // }

  // get showHandover() {
  //   return this._showHandover;
  // }


  // @Input()
  // set handoverPosition(value: string) {
  //   if (value) {
  //     this._handoverposition = value;
  //   }
  // }

  // get handoverPosition() {
  //   return this._handoverposition;
  // }

  // @Input() Images: any = [];

  // @Input()
  // set width(value: number) {
  //   this.calousel_width = value;
  // }

  // get width() {
  //   return this.calousel_width;
  // }

  // @Input()
  // set height(value: number) {
  //   this.calousel_height = value;
  // }

  // get height() {
  //   return this.calousel_height;
  // }


  // @Input()
  // set fmAlign(value: string) {
  //   if (value === 'center' || value === 'end' || value === 'start') {
  //     this.itemAlign = value === 'center' ? value : 'flex-' + value;
  //   }
  // }

  // get fmAlign() {
  //   return this.itemAlign;
  // }

  @ViewChild('calouselcontainer') _container: ElementRef;
  constructor(
    private render: Renderer2,
    private element: ElementRef
  ) { }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    if (this._options.data.length <= 4) {
      this.selectedIndex = 2;
    } else {
      this.selectedIndex = 3;
    }
    this.item_doms = this.element.nativeElement.querySelectorAll('.ng-carousel-item');
    console.log(this.item_doms_bt);
    this.item_doms_length = this.item_doms.length;
    for (let i = 0; i < this.item_doms_length; i++) {
      this.class_now_array.push(i + 1);
    }
    this.fn_domaddClass();
    this.fn_listenClick();
  }

  fn_next() {
    if (this.ableClick) {
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
      }, 500);
    }
  }

  fn_previous() {
    if (this.ableClick) {
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
      }, 500);
    }
  }

  fn_domaddClass() {
    for (let i = 0; i < this.item_doms_length; i++) {
      if (this._options.data.length <= 4) {
        this.render.addClass(this.item_doms[i], 's' + this.class_now_array[i]);
      }
      if (this._options.data.length > 4) {
        this.render.addClass(this.item_doms[i], 'p' + this.class_now_array[i]);
      }

    }
  }

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

  fn_listenClick() {
    let _preview = null;
    let _next = null;
    if (this._options.data.length <= 4) {
      _preview = this.element.nativeElement.querySelectorAll('.s1');
      _next = this.element.nativeElement.querySelectorAll('.s3');
    }

    if (this._options.data.length > 4) {
      _preview = this.element.nativeElement.querySelectorAll('.p2');
      _next = this.element.nativeElement.querySelectorAll('.p4');
    }
    this._listenClick[0] = this.render.listen(_preview[0], 'click', this.fn_previous.bind(this));
    this._listenClick[1] = this.render.listen(_next[0], 'click', this.fn_next.bind(this));
  }

  fn_removelisten() {
    for (const entry of this._listenClick) {
      if (entry) {
        entry();
      }
    }
  }

  fn_selectChange(index) {
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
  }
}
