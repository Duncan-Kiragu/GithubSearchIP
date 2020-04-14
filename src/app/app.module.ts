import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { UserService } from './user-http/user.service';
import { ReposService } from './repos-http/repos.service';
import { NgProgressModule } from 'ngx-progressbar';

import { RoutingModule} from './routing/routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { RepositoryComponent } from './repository/repository.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';
import { ForksPipe } from './forks.pipe';

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
    FormsModule,
    HttpModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgProgressModule 
  ],
  providers: [UserService, ReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
