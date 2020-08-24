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
    new Quote('Leo', 'If you dont have time to read, you dont have the time (or the tools) to write. Simple as that.','Umberto Eco',new Date(2014,9,1)),
    new Quote('Tania', 'Words are a lens to focus ones mind.','Ayn Rand',new Date(2020,5,6)),
    new Quote('Lisa', 'Hardwork pays','Mahtma Gandi',new Date(2010,4,6)),
    new Quote('George','If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles.','Walter Dyer',new Date(2015,11,20))

  ]

  deleteQuote(toDelete, index){
    if (toDelete) {
      let okDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (okDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  liked(index){
    this.quotes[index].likes++
  }

  disliked(index){
    this.quotes[index].dislikes++
  }

  addNewQuote(quote){
    quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote)
  }
  
  largest :number = 0;
  i:number;
  num:number=0;
  
  highestUpvote(){
  for(this.i=0; this.i < this.quotes.length; this.i++){
    this.largest =  this.quotes[this.i].likes
      if (this.num > this.largest ){
        this.largest = this.num;
      }
      return this.largest;
  }
}
  

  constructor() { }

  ngOnInit(): void {
  }

}
