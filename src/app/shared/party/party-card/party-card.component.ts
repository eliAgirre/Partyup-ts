import { Component, Input } from '@angular/core';

import { Party } from '../party.model';

@Component({
  selector: 'partyup-party-card',
  templateUrl: './party-card.component.html',
  styleUrls: ['./party-card.component.css']
})
export class PartyCardComponent {

  @Input() party: Party;

}
