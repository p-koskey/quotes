export class Quote {
    noLikes : number = 0;
    noDislikes : number = 0;
    constructor(public name:string, public quote:string, public author: string,  public postDate: Date){

    }
}
