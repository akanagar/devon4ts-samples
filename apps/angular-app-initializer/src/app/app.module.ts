import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConfigModule } from './core/config/config.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ConfigModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
