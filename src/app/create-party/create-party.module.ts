import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CreatePartyRoutingModule } from './create-party-routing.module';

import { CreatePartyComponent } from './create-party.component';

@NgModule({
  declarations: [CreatePartyComponent],
  imports: [
    CommonModule,
    SharedModule,
    CreatePartyRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreatePartyModule { }
