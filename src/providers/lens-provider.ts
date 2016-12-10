import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class LensProvider {
  tmp: any;
  lensChoosen: any;



  lensType: string; // Sphere, Toric, Multifocal 
  lensModality: string; // daily, fornighty, monthly
  patientRef: string; // Referal
  prescription: {
    hasToric: boolean,
    sphere: {l: number, r: number},
    cylinder: {l: number, r: number},
    axis: {l: number, r: number},
    bvd: {l: number, r: number}
  } = {
    hasToric: true,
    sphere: {l: 0, r: 0},
    cylinder: {l: 0, r: 0},
    axis: {l: 0, r: 0},
    bvd: {l: 0.011, r: 0.011}
  };
  RX : {l: number, r: number, wasAdjusted: boolean} = { l: 0, r: 0, wasAdjusted: false };
  dailyDisponsableOptions: string; // Clarity 1 day, 1 day moist, Proclear 1 day


  constructor(public http: Http) {}
  calculate(){
    if(this.prescription.hasToric){
      this.RX.l = this.prescription.sphere.l + ( this.prescription.cylinder.l / 2 );
      this.RX.r = this.prescription.sphere.r + ( this.prescription.cylinder.r / 2);
    }
    else{
      this.RX.l = this.prescription.sphere.l / (1 - (this.prescription.bvd.l * this.prescription.sphere.l ));
      this.RX.r = this.prescription.sphere.r / (1 - (this.prescription.bvd.r * this.prescription.sphere.r ));
      this.RX.l = this.round25(this.RX.l);
      this.RX.r = this.round25(this.RX.r);
    }
    console.log(this.RX.l);
    console.log(this.RX.r);
  }

  incLRx(){this.RX.l = this.round( this.RX.l + 0.25, 2); this.RX.wasAdjusted = true }
  incRRx(){this.RX.r = this.round( this.RX.r + 0.25, 2); this.RX.wasAdjusted = true }
  decLRx(){this.RX.l = this.round( this.RX.l - 0.25, 2); this.RX.wasAdjusted = true }
  decRRx(){this.RX.r = this.round( this.RX.r - 0.25, 2); this.RX.wasAdjusted = true }

  incSL(){this.prescription.sphere.l = this.round( this.prescription.sphere.l + 0.25, 2)}
  decSL(){this.prescription.sphere.l = this.round( this.prescription.sphere.l - 0.25, 2)}
  incSR(){this.prescription.sphere.r = this.round( this.prescription.sphere.r + 0.25, 2)}
  decSR(){this.prescription.sphere.r = this.round( this.prescription.sphere.r - 0.25, 2)}

  incCL(){
    this.prescription.cylinder.l = this.round( this.prescription.cylinder.l + 0.25, 2);
    if(this.prescription.cylinder.l > 0){this.prescription.cylinder.l = 0}
  }
  decCL(){
    this.prescription.cylinder.l = this.round( this.prescription.cylinder.l - 0.25, 2);
    if(this.prescription.cylinder.l < -8){this.prescription.cylinder.l = -8};
  }
  incCR(){
    this.prescription.cylinder.r = this.round( this.prescription.cylinder.r + 0.25, 2);
    if(this.prescription.cylinder.r > 0) { this.prescription.cylinder.r = 0};
  }
  decCR(){
    this.prescription.cylinder.r = this.round( this.prescription.cylinder.r - 0.25, 2);
    if(this.prescription.cylinder.r < -8){this.prescription.cylinder.r = -8};
  }

  incAL(){this.prescription.axis.l += 1; if(this.prescription.axis.l > 180){this.prescription.axis.l = 180}}
  decAL(){this.prescription.axis.l -= 1; if(this.prescription.axis.l < 0){this.prescription.axis.l = 0}}
  incAR(){this.prescription.axis.r += 1; if(this.prescription.axis.r > 180){this.prescription.axis.r = 180}}
  decAR(){this.prescription.axis.r -= 1; if(this.prescription.axis.r < 0){this.prescription.axis.r = 0}}


  incRBVD(){
    this.prescription.bvd.r = this.round( this.prescription.bvd.r + 0.001, 3);
    if(this.prescription.bvd.r > 0.015) {this.prescription.bvd.r = 0.015}
  }
  decRBVD(){
    this.prescription.bvd.r = this.round( this.prescription.bvd.r - 0.001, 3);
    if(this.prescription.bvd.r < 0.008) {this.prescription.bvd.r = 0.008}
  }
  incLBVD(){
    this.prescription.bvd.l = this.round( this.prescription.bvd.l + 0.001, 3);
    if(this.prescription.bvd.l > 0.015) {this.prescription.bvd.l = 0.015}
  }
  decLBVD(){
    this.prescription.bvd.l = this.round( this.prescription.bvd.l - 0.001, 3);
    if(this.prescription.bvd.l < 0.008) {this.prescription.bvd.l = 0.008}
  }
  round(x, digits){
    return parseFloat(x.toFixed(digits))
  }
  round25(x){
    return Math.ceil(x / 0.25) * 0.25;
  }
}
