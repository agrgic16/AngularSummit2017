/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {GenderPipe} from './gender.pipe';
import {PersonService} from './person.service';
import { SearchComponent } from './search/search.component';

describe('App: PeopleProject', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GenderPipe,
        SearchComponent
      ],
      imports: [
        HttpModule
      ],
      providers: [
        PersonService
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have the people array defined`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.people).toBeDefined();
  }));

});
