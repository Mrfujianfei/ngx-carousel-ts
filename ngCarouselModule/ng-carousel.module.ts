
import {
    HammerGestureConfig,
    HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCarouselComponent } from './components/ng-carousel.component';

@NgModule({
    imports: [CommonModule],
    exports: [
        NgCarouselComponent
    ],
    declarations: [
        NgCarouselComponent
    ]
})
export class NgCarouselModule { }
