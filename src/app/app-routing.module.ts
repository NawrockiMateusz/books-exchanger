import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AuctionComponent } from './main/auction/auction.component';
import { MessagesComponent } from './main/messages/messages.component';
import { ProfileComponent } from './main/profile/profile.component';
import { ReplacementComponent } from './main/replacement/replacement.component';
import { SearchingComponent } from './main/searching/searching.component';
import { WishlistComponent } from './main/wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  {
    path: 'home',
    component: MainComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auctio',
    component: AuctionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'replacement',
    component: ReplacementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'search',
    component: SearchingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
