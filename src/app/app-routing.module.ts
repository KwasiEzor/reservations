import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonnementComponent } from './pages/abonnement/abonnement.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProgramComponent } from './pages/program/program.component';
import { ResetPassComponent } from './pages/reset-pass/reset-pass.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'abonnement',component:AbonnementComponent},
  {path:'contact',component:ContactComponent},
  {path:'cart',component:CartComponent},
  {path:'payment',component:PaymentComponent},
  {path:'program',component:ProgramComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'shows',component:ShowsComponent},
  {path:'forgot-pass',component:ForgotPassComponent},
  {path:'reset-pass',component:ResetPassComponent},
  {path:'profile',component:UserProfileComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
