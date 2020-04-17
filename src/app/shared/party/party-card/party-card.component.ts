import { Component, Input } from '@angular/core';

import { Party } from '../party.model';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { PartyService } from '../party.service';

@Component({
  selector: 'partyup-party-card',
  templateUrl: './party-card.component.html',
  styleUrls: ['./party-card.component.css']
})
export class PartyCardComponent {

  @Input() party: Party;

  constructor(
    private authService: AuthenticationService,
    private partyService: PartyService
  ) { }

  setFavoriteParty() {
    this.partyService.getFavoritesParties(this.authService.token.idAuthor).subscribe(
      parties => {
        console.log(parties);
        if (parties.indexOf(this.party.id) != -1) {
          parties = parties.filter(value => {
            if (value != this.party.id) {
              return value;
            }
          });
          this.party.favorite = false;
        } else {
          parties.push(this.party.id);
          this.party.favorite = true;
        }
        this.partyService.setFavoriteParties(this.authService.token.idAuthor, parties).subscribe(
          response => console.log(response)
        );
      }
    );
  }

}
