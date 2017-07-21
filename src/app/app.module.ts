import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TrimValueAccessorModule } from 'ng-trim-value-accessor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TrimValueAccessorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
