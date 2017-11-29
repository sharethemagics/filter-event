import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MakeFilterPipe } from './make-filter.pipe';
import { ModelFilterPipe } from './model-filter.pipe';
import { AppService } from './app.service';

// Data and Service
import { ICar } from './car';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'app';
  makeListFilter: Object[];
  modelListFilter = '';
  makeSearch = '';
  modelSearch = '';

  _cars: ICar[];
  muscleCars = [
    {
      id: 1, name: 'Chevrolet', models: [
        { model: 'Camaro' },
        { model: 'Corvette' }
      ]
    },
    {
      id: 2, name: 'Dodge', models: [
        { model: 'Challenger' },
        { model: 'Charger' },
        { model: 'Viper' }
      ]
    },
    {
      id: 3, name: 'Ford', models: [
        { model: 'GT' },
        { model: 'Mustang' }
      ]
    },
    {
      id: 3, name: 'sathees', models: [
        { model: 'GT' },
        { model: 'Mustang' }
      ]
    }
    
  ];
  constructor(private _appService: AppService) {
  }

  ngOnInit(): void {
    this._appService.getCars()
      .subscribe(_cars => this._cars = _cars);
  }

  selectMake() {
    if (this.modelListFilter) {
      this.modelListFilter = '';
    }
    this.makeSearch = this.makeListFilter['name'];
    this.modelSearch = this.modelListFilter;
    console.log(this.makeSearch);
    console.log(this.modelSearch);
  }
  selectModel() {
    this.makeSearch = this.makeListFilter['name'];
    this.modelSearch = this.modelListFilter;
    console.log(this.makeSearch);
    console.log(this.modelSearch);
  }


}
