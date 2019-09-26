import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JokesProvider } from './services/jokes-provider.service';

export function jokesProviderFactory(provider: JokesProvider) {
  return () => provider.loadNew();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    JokesProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: jokesProviderFactory,
      deps: [JokesProvider],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
