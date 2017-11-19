import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public result:number;
  public num1:string;
  public num2:string;

    addValues() {
      this.result=Number(this.num1) + Number(this.num2);
  console.log(this.result);
    }
  
}
