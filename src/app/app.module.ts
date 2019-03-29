import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { HttpComponent } from './components/http/http.component';
import { ModelService } from './models/model.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HttpComponent],
  bootstrap: [AppComponent],
  providers: [ApiService, ModelService]
})
export class AppModule { }
