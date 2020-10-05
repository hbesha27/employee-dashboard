import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PhoneNumberFormatterPipe } from './Pipes/phone-number-formatter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FilterPipe,
    HeaderComponent,
    FooterComponent,
    PhoneNumberFormatterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
