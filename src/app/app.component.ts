import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public result:number;
  public sNum1:string;
  public sNum2:string;

    addValues() {
      this.result=Number(this.sNum1) + Number(this.sNum2);
  console.log(this.result);
    }
  
}
