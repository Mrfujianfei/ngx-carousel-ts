import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { NgCarouselComponent } from './app/ng-carousel/ng-carousel.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [NgCarouselComponent],
    declarations: [
        NgCarouselComponent
    ],
    providers: [],
})
export class Ng6CarouselModule { }
