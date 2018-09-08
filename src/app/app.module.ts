import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { NgCarouselComponent } from 'ngCarouselModule/components/ng-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NgCarouselComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
