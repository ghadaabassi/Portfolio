import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { QRCodeComponent } from '../components/qr-code/qr-code.component';
import { NetflixComponent } from '../components/netflix/netflix.component';
import { MeteoComponent } from '../components/meteo/meteo.component';
import { ImageGeneratorComponent } from '../components/image-generator/image-generator.component';
import { StripeComponent } from '../components/stripe/stripe.component';


export const routes: Routes = [
  { path: 'welcome/:email', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'QR', component: QRCodeComponent },
  { path: 'netflix', component: NetflixComponent },
  { path: 'netflix', component: NetflixComponent },
  { path: 'meteo', component: MeteoComponent },
  { path: 'image', component: ImageGeneratorComponent },
  { path: 'stripe', component: StripeComponent},
  {
    path: 'manage',
    loadChildren: () =>
      import('../modules/manage/manage.module').then((m) => m.ManageModule),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
