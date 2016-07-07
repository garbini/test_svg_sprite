import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode,provide } from '@angular/core';
import { AppComponent } from './app/app.component';
import { APP_BASE_HREF } from '@angular/common';
if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [
  provide(APP_BASE_HREF, {useValue : '/' }),
]);
