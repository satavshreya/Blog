import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteHeaderComponent } from './website-header/website-header.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { CopyrightInfoComponent } from './copyright-info/copyright-info.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'signup', component:SignUpComponent},
  {path:'signin', component:SignInComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    WebsiteHeaderComponent,
    SideNavigationComponent,
    CopyrightInfoComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
