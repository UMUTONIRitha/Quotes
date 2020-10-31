import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela'),
   new Quote(2,'The way to get started is to quit talking and begin doing.','Walt Disney'),
    new Quote(3,'If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt'),
    new Quote(4,"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",'Steve Jobs'),
    new Quote(5,"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",'Oprah Winfrey'),
   new Quote(6,"Life is what happens when you're busy making other plans.",'John Lennon'),
  ];
  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}