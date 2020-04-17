import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../core/auth-guard.service';

import { CreatePartyComponent } from './create-party.component';

const createPartyRoutes: Routes = [
    {
        path: 'create-party',
        component: CreatePartyComponent,
        canActivate: [AuthGuardService]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(createPartyRoutes)
    ]
})
export class CreatePartyRoutingModule { }
