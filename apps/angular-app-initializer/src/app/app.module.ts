import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigModule } from './core/config/config.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ConfigModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}



