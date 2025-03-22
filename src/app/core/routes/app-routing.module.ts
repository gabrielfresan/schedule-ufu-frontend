import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
    { path: '/reservas', component: HomeComponent }, 
    { path: 'minhas-reservas', component: HomeComponent },
    { path: 'configuracoes', component: HomeComponent },
    { path: '', redirectTo: '/reservas', pathMatch: 'full' },
    { path: '**', redirectTo: '/reservas' } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
