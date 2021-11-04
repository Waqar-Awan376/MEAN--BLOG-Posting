import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AddProposalComponent } from './add-proposal/add-proposal.component';
import { AllProposalsComponent } from './all-proposals/all-proposals.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AddProposalComponent,
    AllProposalsComponent,
    UpdateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
