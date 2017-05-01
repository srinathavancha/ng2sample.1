import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Candidate }                from './candidate';
import { CandidateService }         from './candidate.service';

@Component({
  selector: 'my-candidates',
  template: `
            <h2>Candidate List</h2>
            <ul class="candidates">
              <li *ngFor="let candidate of candidates" (click)="onSelect(candidate)"
                  [class.selected]="candidate === selectedCandidate">
                <span class="badge">{{candidate.id}}</span>
                <span>{{candidate.name}}</span>
              </li>
            </ul>
            <div *ngIf="selectedCandidate">
              <h2>
                {{selectedCandidate.name | uppercase}} is my candidate
              </h2>
            </div>
    `
})
export class CandidateComponent implements OnInit {
  candidates: Candidate[];
  selectedCandidate: Candidate;

  constructor(
    private candidateService: CandidateService,
    private router: Router
  ) { }

  getCandidates(): void {
    this.candidateService
        .getCandidates()
        .then(candidates => this.candidates = candidates);
  }

  ngOnInit(): void {
    this.getCandidates();
  }

  onSelect(candidate: Candidate): void {
    this.selectedCandidate = candidate;
  }
}