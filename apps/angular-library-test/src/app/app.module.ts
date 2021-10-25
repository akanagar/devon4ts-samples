import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularLibraryModule } from 'my-ng-library';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
