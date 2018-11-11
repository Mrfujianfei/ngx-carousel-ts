import { NgModule } from '@angular/core';
import { NgxCarouselComponent } from './ngx-carousel/ngx-carousel.component';
import { CommonModule } from '@angular/common';
import { NgxCarouselCubeComponent } from './ngx-carousel-cube/ngx-carousel-cube.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [NgxCarouselComponent, NgxCarouselCubeComponent],
  exports: [NgxCarouselComponent]
})
export class NgxCarouselTsModule { }
