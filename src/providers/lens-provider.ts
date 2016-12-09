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
  lensType: string; // Sphere, Toric, Multifocal 
  prescription: {
    leftEye: number,
    rightEye: number
  } = {
    leftEye: 0,
    rightEye: 0
  };
  lensModality: string; // daily, fornighty, monthly
  dailyDisponsableOptions: string; // Clarity 1 day, 1 day moist, Proclear 1 day
  patientRef: string; // Referal

  

  
  vertexAdjustedRx: number = 0;
  constructor(public http: Http) {}


  
  calculate(hasToric){
    /*if(hasToric){
      this.vertexAdjustedRx = this.prescription + ( this.astigmatismValue / 2 );
    }
    else{
      this.vertexAdjustedRx = this.prescription / (1 - (0.012 * this.prescription ));
    }*/
  }

  incL(){this.prescription.leftEye = this.round( this.prescription.leftEye + 0.25, 2)}
  decL(){this.prescription.leftEye = this.round( this.prescription.leftEye - 0.25, 2)}
  incR(){this.prescription.rightEye = this.round( this.prescription.rightEye + 0.25, 2)}
  decR(){this.prescription.rightEye = this.round( this.prescription.rightEye - 0.25, 2)}
  round(x, digits){
    return parseFloat(x.toFixed(digits))
  }
}
