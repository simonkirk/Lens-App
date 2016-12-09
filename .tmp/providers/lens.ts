import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Lens provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LensProvider {
  type: string;
  patientRef: string;
  modality: string;
  prescription: number = 0;
  astigmatismValue: number = 0;
  hasAstigmatism: boolean = false;
  dailyDisponsableOptions: string;

  vertexAdjustedRx: number = 0;
  constructor(public http: Http) {}


  
  calculate(hasToric){
    if(hasToric){
      this.vertexAdjustedRx = this.prescription + ( this.astigmatismValue / 2 );
    }
    else{
      this.vertexAdjustedRx = this.prescription / (1 - (0.012 * this.prescription ));
    }
  }

  setDailyDisponsableOptions(options){this.dailyDisponsableOptions = options}
  setModality(modality){this.modality = modality}
  setType(type){this.type = type}
  inc(){this.prescription = this.round( this.prescription + 0.1, 2)}
  dec(){this.prescription = this.round( this.prescription - 0.1, 2)}
  incA(){this.astigmatismValue = this.round( this.astigmatismValue + 0.1, 2)}
  decA(){this.astigmatismValue = this.round( this.astigmatismValue - 0.1, 2)}
  round(x, digits){
    return parseFloat(x.toFixed(digits))
  }
}
