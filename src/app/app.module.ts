import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { MakeFilterPipe } from './make-filter.pipe';
import { ModelFilterPipe } from './model-filter.pipe';
import { MultiplierPipe } from './multiplier.pipe';
import { MainComponent } from './comp/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MakeFilterPipe,
    ModelFilterPipe,
    MultiplierPipe,
    MainComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
