import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {environment} from '../environments/environment';

@Injectable()
export class PersonService {
  columns = [{'key': 'first', 'title': 'Name'}, {'key':'ssn', 'title':'SSN'}];
  people = [];
  server = environment.backendUrl;

  constructor(private https: Http) { }
  getPeople(term) {
    if (term.length < 2) {
      this.people = [];
    } else {
      this.https.get(this.server + '/people/' + term)
        .map((res) => res.json())
        .subscribe((responseJson) => {
          this.people = responseJson.people;
        });
    }
  }
  getPerson(id){
    return this.https.get(this.server + '/person/' + id)
      .map((res)=> res.json())
      .map(({person}) => person);
  }

}
