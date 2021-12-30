import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { CoursModuleComponent } from './components/cours-module/cours-module.component'
import { CoursComponent } from './components/cours/cours.component';
import { EvolutionComponent } from './components/evolution/evolution.component';
import { MaquetteComponent } from './components/maquette/maquette.component';
import { ParametreMaquetteComponent } from './components/parametre-maquette/parametre-maquette.component';


const routes: Routes = [
  // {path: '/', component: AppComponent},
  { path: '/', component: ParametreMaquetteComponent},
  { path: 'modules', component: CoursModuleComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'auth', component: AuthComponent},
  { path: 'evolution', component: EvolutionComponent},
  { path: 'maquette', component: MaquetteComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/' },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }