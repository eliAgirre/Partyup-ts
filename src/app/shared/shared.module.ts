import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyCardComponent } from './party/party-card/party-card.component';
import { PartyListComponent } from './party/party-list/party-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PartyCardComponent, PartyListComponent],
  exports: [PartyCardComponent, PartyListComponent]
})
export class SharedModule { }
