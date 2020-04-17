import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PartyService } from '../shared/party/party.service';
import { AuthenticationService } from '../core/authentication.service';

import { Party } from '../shared/party/party.model';
import { Author } from '../shared/author/author.model';

@Component({
  selector: 'partyup-create-party',
  templateUrl: './create-party.component.html',
  styleUrls: ['./create-party.component.css']
})
export class CreatePartyComponent implements OnInit {

  newPartyForm: FormGroup;

  constructor(

    private authService: AuthenticationService,
    private partyService: PartyService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.newPartyForm = this.fb.group({
      content: ['', [Validators.required, Validators.maxLength(140)]],
    });
  }

  createParty(form: any) {

    this.partyService.getParties().subscribe(response => {
      let partyDate: string = new Date().toLocaleDateString().replace(/\//g, '-');
      let author: Author = new Author(this.authService.token.idAuthor);
      let party: Party = new Party(response.length.toString(), '', author, form.value.content, partyDate);
      this.partyService.setParty(party).subscribe(
        response => this.router.navigate(['/dashboard'])
      )
    });
  }
}
