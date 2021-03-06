import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  count:number;
  largest:number;
  quotes:Quote[]=[
    
    new Quote('Kimani', 'If you dont have time to read, you dont have the time (or the tools) to write. Simple as that.',
    'Stephen King',new Date(2020,3,14)),
    new Quote('Steph', 'To survive, you must tell stories.','Umberto Eco',new Date(2019,1,14)),
    new Quote('Leo', 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.','Martin Luther King',new Date(2014,9,1)),
    new Quote('Tania', 'Words are a lens to focus ones mind.','Ayn Rand',new Date(2020,5,6)),
    new Quote('Lisa', 'Be the change that you wish to see in the world.','Mahtma Gandi',new Date(2010,4,6)),
    new Quote('George','If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles.','Walter Dyer',new Date(2015,11,20))

  ]

  deleteQuote(index){
   
      let okDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (okDelete){
        this.quotes.splice(index,1)
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
  
 
  highestVotes(){
    
    this.largest = 0;
   
    for(this.count=0; this.count < this.quotes.length; this.count++){

        if (this.largest < this.quotes[this.count].likes){
          this.largest = this.quotes[this.count].likes
        }
                
    }
    return this.largest
    
}
  

  constructor() { }

  ngOnInit(): void {
  }

}
