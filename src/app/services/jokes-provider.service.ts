import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JokesProvider {
  private joke: JokeModel = null;

  constructor(private http: HttpClient) {}

  public getJoke(): JokeModel {
    return this.joke;
  }

  load() {
    console.log('loading random Chuck Norris joke');
    return new Promise((resolve, reject) => {
      this.http
        .get('https://api.icndb.com/jokes/random')
        .subscribe(response => {
          this.joke = response['value'];
          console.log('joke loading complete');
          resolve(true);
        });
    });
  }

  loadNew() {
    console.log('loading random Chuck Norris joke');
    return this.http
      .get('https://api.icndb.com/jokes/random')
      .toPromise()
      .then(response => {
        this.joke = response['value'];
        console.log('joke loading complete');
      })
      .catch();
  }
}
