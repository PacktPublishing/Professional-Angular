import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { NewPipePipe } from './shared/new-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    NewPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
