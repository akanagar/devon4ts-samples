import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core.module';
import { DishFormComponent } from './dish-form/dish-form.component';
import { DishViewComponent } from './dish-view/dish-view.component';
import { DishShareService } from './shared/dish-share.service';

@NgModule({
  declarations: [DishFormComponent, DishViewComponent],
  imports: [
    BrowserModule,
    CoreModule, // Module containing Angular Materials
    FormsModule,],
  entryComponents: [DishFormComponent, DishViewComponent],
  providers: [DishShareService],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(DishFormComponent, {
      injector: this.injector,
    });
    customElements.define('dish-form', el);

    const elView = createCustomElement(DishViewComponent, {
      injector: this.injector,
    });
    customElements.define('dish-view', elView);
  }
}


