import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CreatePartyModule } from './create-party/create-party.module'
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    LoginModule,
    ProfileModule,
    DashboardModule,
    CreatePartyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
