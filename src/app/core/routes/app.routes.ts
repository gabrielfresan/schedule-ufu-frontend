import { Routes } from '@angular/router';
import { ScheduleComponent } from '../components/pages/schedule/schedule.component';
import { UserschdeulesComponent } from '../components/pages/userschdeules/userschdeules.component';
import { ConfigurationComponent } from '../components/pages/configuration/configuration.component';

export const routes: Routes = [
  { path: '', redirectTo: '/reservas', pathMatch: 'full' },
  { path: 'reservas', component: ScheduleComponent },
  { path: 'minhas-reservas', component: UserschdeulesComponent },
  { path: 'configuracoes', component: ConfigurationComponent },
  { path: '**', redirectTo: '/reservas' }
];