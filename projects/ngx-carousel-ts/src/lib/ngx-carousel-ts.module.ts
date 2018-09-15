import { NgModule } from '@angular/core';
import { NgxCarouselComponent } from './ngx-carousel/ngx-carousel.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [NgxCarouselComponent],
  exports: [NgxCarouselComponent]
})
export class NgxCarouselTsModule { }
