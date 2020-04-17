import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PartyService } from './party/party.service';
import { AuthorService } from './author/author.service';

import { PartyCardComponent } from './party/party-card/party-card.component';
import { PartyListComponent } from './party/party-list/party-list.component';
import { AuthorCardComponent } from './author/author-card/author-card.component';
import { ShortByPipe } from './sort-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [PartyService, AuthorService],
  declarations: [PartyCardComponent, PartyListComponent, AuthorCardComponent, ShortByPipe],
  exports: [PartyCardComponent, PartyListComponent, AuthorCardComponent, RouterModule]
})
export class SharedModule { }
