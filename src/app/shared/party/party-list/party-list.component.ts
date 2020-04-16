import { Component, Input } from '@angular/core';

import { Party } from '../party.model';
import { Author } from '../../author/author.model';

@Component({
  selector: 'partyup-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent {

  @Input() parties: Party[];

}
