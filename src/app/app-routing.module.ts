import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BindingComponent } from './binding/binding.component';
import { CareerComponent } from './career/career.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'career', component:CareerComponent},
  {path:'client',  component:ClientComponent},
  {path:'product' , component:ProductComponent},
  {path:'binding', component:BindingComponent},
  {path:'login' , component: LoginComponent},
  {path:'signup' , component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
