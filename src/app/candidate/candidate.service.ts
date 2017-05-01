import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Candidate } from './candidate';

@Injectable()
export class CandidateService {
    
    private headers = new Headers({'Content-Type': 'application/json'});
    private candidatesUrl = 'api/candidates';  // URL to web api
    
    //parameterised constructor
    constructor(private http: Http) {}

    //get list of candidates
    getCandidates(): Promise<Candidate[]> {
        return this.http.get(this.candidatesUrl)
        .toPromise()
        .then(response => response.json().data as Candidate[])
        .catch(this.handleError);        
    }
    
    //handle error
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

