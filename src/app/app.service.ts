import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ICar } from './car';

@Injectable()
export class AppService {

    constructor(private _http: Http) { }
    getCars() {
        return this._http.get('assets/muscleCars.json')
            .map(response => <ICar[]>response.json().muscleCarData);
    }
}
