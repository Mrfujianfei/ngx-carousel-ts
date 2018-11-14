# ngx-carousel-ts

## 简介

**ngx-carousel-ts** —— 基于angular的图片轮播组件，小巧轻便，使用简单，配置方便，提供多属性设置灵活性高。

+ 官网：https://mrfujianfei.github.io/ngx-carousel-ts.github.io/
+ 文档：https://mrfujianfei.github.io/ngx-carousel-ts.github.io/doc/use/
+ 源码：https://github.com/Mrfujianfei/ngx-carousel-ts

*目前还在开发持续开发中*

## Demo

![avatar](./src/assets/flat.gif)

![avatar](./src/assets/cube.gif)

## 安装和下载

#### npm：

 `npm i ngx-carousel-ts`


## 快速使用

**1.步骤一**：引入NgxCarouselTsModule。

 `import { NgxCarouselTsModule } from 'ngx-carousel-ts';`

**2.步骤二**：在app.module里面声明NgxCarouselTsModule。

 `imports: [ NgxCarouselTsModule ]`

**3.步骤三**：使用。

HTML如下：

 `<ngx-carousel [options]="options"></ngx-carousel>`

Typescipte如下：

```
export class AppComponent {
    options = {
        data:['图片路径1','图片路径2'],
    };
}
```

*注：图片路径可以是相对路径，也可以是绝对路径！*


## 属性配置列表

**参见使用文档**：https://mrfujianfei.github.io/ngx-carousel-ts.github.io/doc/use/


## 交流 & 提问

- github：https://github.com/Mrfujianfei/ngx-carousel-ts/issues
- QQ：1501324336
- WeChat：fu1501324336

## 关于作者

作者：喜欢的话点个star吧，谢谢鼓励！

