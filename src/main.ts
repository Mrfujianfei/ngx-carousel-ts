import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { Ng6CarouselModule } from './app/ng6-carousel.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(Ng6CarouselModule)
  .catch(err => console.log(err));
