import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProgramComponent } from './pages/program/program.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { AbonnementComponent } from './pages/abonnement/abonnement.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { HeadingTitleComponent } from './shared/components/heading-title/heading-title.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';
import { ResetPassComponent } from './pages/reset-pass/reset-pass.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartItemComponent } from './shared/components/cart-item/cart-item.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SigninComponent,
    SignupComponent,
    ProgramComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    ShowsComponent,
    AbonnementComponent,
    PaymentComponent,
    HeroComponent,
    HeadingTitleComponent,
    ForgotPassComponent,
    ResetPassComponent,
    CartComponent,
    CartItemComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
