import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { MainRouteModule } from './routes/main-route.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './common/in-memory-data.service';

import { AppComponent }  from './app.component';
import { CandidateComponent }      from './candidate/candidate.component';
import { CandidateService }          from './candidate/candidate.service';

@NgModule({
    imports:      [
        BrowserModule, 
        HttpModule, 
        InMemoryWebApiModule.forRoot(InMemoryDataService), 
        MainRouteModule
    ],
    declarations: [ 
        AppComponent,
        CandidateComponent
    ],
    providers: [
        CandidateService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://v2.angular.io/license
*/