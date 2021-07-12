import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowService } from './shared/services/show.service';
import { ArtistService } from './shared/services/artist.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);
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
    UserProfileComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    ShowService,
    ArtistService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
