import { Component, OnInit } from '@angular/core';

import { Party } from '../../shared/party/party.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { AuthorService } from 'src/app/shared/author/author.service';
import { PartyService } from 'src/app/shared/party/party.service';
import { from } from 'rxjs';

@Component({
  selector: 'partyup-my-parties',
  templateUrl: './my-parties.component.html',
  styleUrls: ['./my-parties.component.css']
})
export class MyPartiesComponent implements OnInit {

  partyList: Party[] = [];
  idAuthor: string = null;

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private authorService: AuthorService,
    private partyService: PartyService

  ) { }

  ngOnInit(): void {

    this.idAuthor = this.route.parent.snapshot.params['id'];

    this.partyService.getAuthorParties(this.idAuthor).subscribe(parties => {

      from(parties).subscribe(party => {

        this.authorService.getAuthor(party.author.id).subscribe(author => {

          party.author = author;

          this.partyService.getFavByAuthor(author.id, party.id).subscribe(favorite => {

            party.favorite = favorite;
            this.partyList.push(party);

          })
        })

      })

    })

  }

}
