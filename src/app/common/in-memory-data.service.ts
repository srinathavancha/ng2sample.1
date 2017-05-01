import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let candidates = [
      {id: 11, name: 'Srinath A'},
      {id: 12, name: 'Ramya D'},
      {id: 13, name: 'Vamshi K'}
    ];
    return {candidates};
  }
}