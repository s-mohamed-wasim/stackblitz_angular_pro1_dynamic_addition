import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{

  ngOnInit() : void{
    //alert("Description: This application helps you to calculate sum of 'N' numbers.\n where 'N' is the number of inputs entered by the user.");
  }
  
  numbers = [];

  result : number = 0;

  addFields(val)
  {
    this.result = 0;
    this.numbers = [];
    let limit : number = Number(val.value);
    let i : number;
    for(i=0;i<limit;i++)
    {
      this.numbers.push({value:""});
    }
  }

  calculateSum()
  {
    let sum = 0;
    let i : number;
    for(i=0;i<this.numbers.length;i++)
    {
      sum += Number(this.numbers[i].value);
    }
    this.result = sum;
  }
}
