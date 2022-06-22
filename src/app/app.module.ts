import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from "@ionic/storage";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
