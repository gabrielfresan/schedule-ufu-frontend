import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './core/components/pages/schedule/schedule.component';
import { ConfigurationComponent } from './core/components/pages/configuration/configuration.component';
import { UserschdeulesComponent } from './core/components/pages/userschdeules/userschdeules.component';
import { RouterLink } from '@angular/router';


@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        AppComponent,
        ScheduleComponent,
        ConfigurationComponent,
        UserschdeulesComponent,
        RouterLink
        
        
    ],
    providers: []
})
export class AppModule {}
