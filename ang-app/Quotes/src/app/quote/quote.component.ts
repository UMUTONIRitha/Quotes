import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela',new Date(2020,3,14)),
   new Quote(2,'The way to get started is to quit talking and begin doing.','Walt Disney',new Date(2025,5,24)),
    new Quote(3,'If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt',new Date(2030,3,14)),
    new Quote(4,"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",'Steve Jobs',new Date(1998,4,30)),
    new Quote(5,"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",'Oprah Winfrey',new Date(2002,9,4)),
   new Quote(6,"Life is what happens when you're busy making other plans.",'John Lennon',new Date(2020,10,14)),
  ];
  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}