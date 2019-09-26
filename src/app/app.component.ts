import { Component, OnInit } from '@angular/core';
import { JokesProvider } from './services/jokes-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  jokeModel: JokeModel;

  constructor(jokesProvider: JokesProvider) {
    this.jokeModel = jokesProvider.getJoke();
  }

  ngOnInit() {
    console.log('AppComponent: OnInit()');
  }
}
