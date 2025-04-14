import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './core/pages/schedule/schedule.component';
import { ConfigurationComponent } from './core/pages/configuration/configuration.component';
import { UserschdeulesComponent } from './core/pages/userschdeules/userschdeules.component';
import { RouterLink } from '@angular/router';
import { provideNgxMask } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        AppComponent,
        ScheduleComponent,
        ConfigurationComponent,
        UserschdeulesComponent,
        RouterLink,
        ReactiveFormsModule,
    ],
    providers: [
        provideNgxMask()
    ],
})
export class AppModule { }
