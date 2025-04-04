import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { UserschdeulesComponent } from '../components/userschdeules/userschdeules.component';
import { ConfigurationComponent } from '../components/configuration/configuration.component';

export const routes: Routes = [
  { path: '', redirectTo: '/reservas', pathMatch: 'full' },
  { path: 'reservas', component: HomeComponent },
  { path: 'minhas-reservas', component: UserschdeulesComponent },
  { path: 'configuracoes', component: ConfigurationComponent },
  { path: '**', redirectTo: '/reservas' }
];