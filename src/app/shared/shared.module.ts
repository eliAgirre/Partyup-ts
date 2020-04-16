import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyCardComponent } from './party/party-card/party-card.component';
import { PartyListComponent } from './party/party-list/party-list.component';
import { AuthorCardComponent } from './author/author-card/author-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PartyCardComponent, PartyListComponent, AuthorCardComponent],
  exports: [PartyCardComponent, PartyListComponent, AuthorCardComponent]
})
export class SharedModule { }
