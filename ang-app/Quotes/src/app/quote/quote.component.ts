import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {id:1, name:'The greatest glory in living lies not in never falling, but in rising every time we fall.',author:'Nelson Mandela'},
    {id:2,name:'The way to get started is to quit talking and begin doing.',author:'Walt Disney'},
    {id:3,name:'If life were predictable it would cease to be life, and be without flavor.',author:'Eleanor Roosevelt'},
    {id:4, name:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",author:'Steve Jobs'},
    {id:5,name:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",author:'Oprah Winfrey'},
    {id:6,name:"Life is what happens when you're busy making other plans.",author:'John Lennon'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
