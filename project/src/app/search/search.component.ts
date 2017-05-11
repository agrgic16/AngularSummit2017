import { Component, OnInit } from '@angular/core';
import {PersonService} from './../person.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  predicate: any;
  reverseSort: boolean = false;
  constructor(private personService: PersonService) {
  }

  ngOnInit() {
  }

  checkSearch(term) {
    return this.personService.getPeople(term);
  }

  toggleSortOrder(column) {
    
    if (column === this.predicate){
      this.reverseSort = !this.reverseSort;
    } else {
      this.reverseSort = false;
    }
    this.predicate = column;
    this.personService.people.sort((itemOne, itemTwo) =>
      (itemOne[column] < itemTwo[column]) ? -1 :
        (itemOne[column] > itemTwo[column]) ? 1 : 0
    );
    if (this.reverseSort){
      this.personService.people.reverse();
    }
  }

  sortArrow(column) {
    if (column === this.predicate){
      if (this.reverseSort){
        return 'keyboard_arrow_up';
      } else {
        return 'keyboard_arrow_down';
      }
    } else {
      return '';
    }
  }
}
