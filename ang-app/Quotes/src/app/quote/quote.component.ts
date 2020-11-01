import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",'Marilyn Monroe','Ritha',0,0,new Date(2020,3,14)),
   new Quote(2,"You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth",'William W. Purkey','Zilfa',0,0,new Date(2005,5,24)),
    new Quote(3,"You know you're in love when you can't fall asleep because reality is finally better than your dreams",'Dr. Seuss','Ritha',0,0,new Date(2010,3,14)),
    new Quote(4,"A friend is someone who knows all about you and still loves you.",'Elbert Hubbard','Ritha',0,0,new Date(1998,4,30)),
   new Quote(5,"We accept the love we think we deserve.",'Stephen Chbosky, The Perks of Being a Wallflower','Ritha',0,0,new Date(1998,9,31)),
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