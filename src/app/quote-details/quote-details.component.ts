import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  numberOfLikes : number =0 ;
  numberOfDislikes : number =0 ;
  @Input() quote: Quote;
  @Output() toDelete = new EventEmitter <boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  upvote(){
    this.numberOfLikes++
  }

  downvote(){
    this.numberOfDislikes++
  }

  deleteQuote(trash:boolean){
    this.toDelete.emit(trash);
  }

}
