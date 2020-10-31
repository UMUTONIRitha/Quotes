
import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1, name:'The greatest glory in living lies not in never falling, but in rising every time we fall.'},
    {id:2,name:'The way to get started is to quit talking and begin doing.'},
    {id:3,name:'If life were predictable it would cease to be life, and be without flavor.'},
    
  ];
}
