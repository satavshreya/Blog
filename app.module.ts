import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteHeaderComponent } from './website-header/website-header.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { CopyrightInfoComponent } from './copyright-info/copyright-info.component';
import { MainBodyComponent } from './main-body/main-body.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteHeaderComponent,
    SideNavigationComponent,
    CopyrightInfoComponent,
    MainBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
