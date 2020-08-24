export class Quote {
    public likes :number = 0;
    public dislikes :number = 0;
    constructor(public name:string, public quote:string, public author: string,  public postDate: Date){

    }
}
