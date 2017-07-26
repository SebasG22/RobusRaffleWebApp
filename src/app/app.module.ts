import { CustomerComponent } from './customers/customer.component';
import { CustomerService } from './customers/customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { AwardsComponent } from './awards/awards.component';

import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    AwardsComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
    
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
