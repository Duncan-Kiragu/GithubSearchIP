import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { RepositoryComponent } from './repository/repository.component';
import { HighlightDirective } from './highlight.directive';
import { ForksPipe } from './forks.pipe';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    RepositoryComponent,
    HighlightDirective,
    ForksPipe,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
