import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { ConfigurationComponent } from './core/components/configuration/configuration.component';
import { UserschdeulesComponent } from './core/components/userschdeules/userschdeules.component';
import { RouterLink } from '@angular/router';


@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        AppComponent,
        HomeComponent,
        ConfigurationComponent,
        UserschdeulesComponent,
        RouterLink
        
        
    ],
    providers: []
})
export class AppModule {}
