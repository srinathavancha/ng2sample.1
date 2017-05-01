import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { CandidateComponent } from '../candidate/candidate.component';

const routes: Routes = [
    {path: '', redirectTo: '/candidates', pathMatch: 'full'},
    {path: 'candidates', component: CandidateComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class MainRouteModule {} 