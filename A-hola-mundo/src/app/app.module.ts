import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/headers/src/app/components/headers/header/header.component';
import { BodyComponent } from './components/body/src/app/components/body/body/body.component';
import { FooterComponent } from './components/footer/src/app/components/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
