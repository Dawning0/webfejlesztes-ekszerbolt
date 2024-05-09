import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Shared/services/auth.guard';

const routes: Routes = [
  {path: 'main', loadChildren: () => import('./Pages/main/main.module').then(m => m.MainModule)},
  {path: 'accessories', loadChildren: () => import('./Pages/accessories/accessories.module').then(m => m.AccessoriesModule)},
  {path: 'aboutus', loadChildren: () => import('./Pages/aboutus/aboutus.module').then(m => m.AboutusModule), canActivate : [AuthGuard]},
  {path: 'not-found', loadChildren: () => import('./Pages/not-found/not-found.module').then(m => m.NotFoundModule)},
  {path: 'login', loadChildren: () => import('./Pages/login/login.module').then(m => m.LoginModule)},
  {path: 'register', loadChildren: () => import('./Pages/register/register.module').then(m => m.RegisterModule)},
  {path: 'cart', loadChildren: () => import('./Pages/cart/cart.module').then(m => m.CartModule) },
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
