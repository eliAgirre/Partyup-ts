import { Component, OnInit } from '@angular/core';

import { PartyService } from '../shared/party/party.service';
import { AuthorService } from '../shared/author/author.service';

import { Party } from '../shared/party/party.model';

@Component({
  selector: 'partyup-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  partyList: Party[] = [];

  constructor(
    private authorService: AuthorService,
    private partyService: PartyService) { }

  ngOnInit() {

    //this.authorService.getAuthor('1').subscribe(author => console.log(author));
    //this.partyService.getParties().subscribe(parties => console.log(parties));
    this.partyService.getParties().subscribe(parties => this.partyList = parties);

  }

}
