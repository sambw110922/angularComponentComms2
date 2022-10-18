import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubComponent1Component } from './sub-component1/sub-component1.component';
import { ParentToSubComponent } from './parent-to-sub/parent-to-sub.component';
import { SubToParentComponent } from './sub-to-parent/sub-to-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    SubComponent1Component,
    ParentToSubComponent,
    SubToParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
