import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
  quotes:Quote[]=[
    
    new Quote('Kimani', 'If you dont have time to read, you dont have the time (or the tools) to write. Simple as that.',
    'Stephen King',new Date(2020,3,14)),
    new Quote('Steph', 'To survive, you must tell stories.','Umberto Eco',new Date(2019,1,14)),
    new Quote('Leo', 'If you dont have time to read, you dont have the time (or the tools) to write. Simple as that.','Umberto Eco',new Date(2014,12,1)),
    new Quote(
      'Tania', 'Words are a lens to focus ones mind.','Ayn Rand',new Date(2020,5,6)),

  ]

  deleteQuote(toDelete, index){
    if (toDelete) {
      let okDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (okDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
