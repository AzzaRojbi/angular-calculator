import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  // Addition
  public additionResult: number;
  public sNum1: string;
  public sNum2: string;
  sNumber1: number;
  sNumber2: number;

  addValues() {
    this.sNumber1 = Number(this.sNum1);
    this.sNumber2 = Number(this.sNum2);

    this.additionResult = this.sNumber1 + this.sNumber2;
  }
  
  resetaddValues(){
    this.additionResult =null;
    this.sNumber1 =null;
    this.sNumber2 =null;

  }


  // Difference
  public differenceResult: number;
  public dNum1: string;
  public dNum2: string;
  dNumber1: number;
  dNumber2: number;

  substractValues() {
    this.dNumber1 = Number(this.dNum1);
    this.dNumber2 = Number(this.dNum2);

    this.differenceResult = this.dNumber1 - this.dNumber2;
  }

  resetsubstractValues(){
    this.differenceResult =null;
    this.dNumber1 =null;
    this.dNumber2 =null;

  }

  // Product
  public productResult: number;
  public pNum1: string;
  public pNum2: string;
  pNumber1: number;
  pNumber2: number;

  multiplyValues() {
    this.pNumber1 = Number(this.pNum1);
    this.pNumber2 = Number(this.pNum2);

    this.productResult = this.pNumber1 * this.pNumber2;
  }

  resetmultiplyValues(){
    this.productResult =null;
    this.pNumber1 =null;
    this.pNumber2 =null;

  }

  // Quotient
  public quotientResult: number;
  public qNum1: string;
  public qNum2: string;
  qNumber1: number;
  qNumber2: number;

  divideValues() {
    this.qNumber1 = Number(this.qNum1);
    this.qNumber2 = Number(this.qNum2);

    this.quotientResult = this.qNumber1 / this.qNumber2;
  }

  resetdivideValues(){
    this.quotientResult =null;
    this.qNumber1 =null;
    this.qNumber2 =null;

  }


}