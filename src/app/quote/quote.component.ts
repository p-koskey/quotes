import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  numberOfLikes : number =0 ;
  quotes:Quote[]=[
    
    new Quote('Kimani', 'If you dont have time to read, you dont have the time (or the tools) to write. Simple as that.',
    'Stephen King',0),
    new Quote('Steph', 'To survive, you must tell stories.','Umberto Eco',0),
    new Quote('Leo', 'If you dont have time to read, you dont have the time (or the tools) to write. Simple as that.','Umberto Eco',0),
    new Quote('Tania', 'Words are a lens to focus ones mind.','Ayn Rand',0),

  ]

  upvote(){
    this.numberOfLikes++
  }

  downvote(){
    this.numberOfLikes--
  }
  constructor() { }

  ngOnInit(): void {
  }

}
