import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CudrangularComponent } from './cudrangular/cudrangular.component';

import { FormsModule  } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    CudrangularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
