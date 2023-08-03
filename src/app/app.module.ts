import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DbzModule } from 'src/dbz/dbz.module';

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    // CounterModule,
    // HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
