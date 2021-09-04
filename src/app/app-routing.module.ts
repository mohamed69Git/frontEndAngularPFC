import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DepenseComponent } from './components/depense/depense.component';
import { RevenusComponent } from './components/revenus/revenus.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {
    // path: 'depenses',
    // children: [
    //   {path: '', component: DepenseComponent},
    //   {path: 'revenus', component: RevenusComponent}

    // ]
    path: 'depenses', component: DepenseComponent
  },
  { path: 'revenus', component: RevenusComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/welcome' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
