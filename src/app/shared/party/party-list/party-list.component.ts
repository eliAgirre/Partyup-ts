import { Component, OnInit } from '@angular/core';

import { Party } from '../party.model';
import { Author } from '../../author/author.model';

@Component({
  selector: 'partyup-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent implements OnInit {

  text: string = 'Lorem ipsum dolor sit amet';
  authors: Author[] = [];
  parties: Party[] = [];

  ngOnInit(){
    this.authors.push(new Author('1'));
    this.parties.push(new Party('1', '', this.authors[0], this.text+" 1", '16/04/2020'));
    this.parties.push(new Party('2', '', this.authors[0], this.text+" 2", '16/04/2020'));
    this.parties.push(new Party('3', '', this.authors[0], this.text+" 3", '16/04/2020'));
    this.parties.push(new Party('4', '', this.authors[0], this.text+" 4", '16/04/2020'));
  }

}
