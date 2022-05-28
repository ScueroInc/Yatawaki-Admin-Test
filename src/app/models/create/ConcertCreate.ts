type Nullable<T> = T | null;

export class ConcertCreate{
    idSymphony?: number;
    idUser?: number;

    constructor(){
        this.idSymphony = 0;
        this.idUser = 0;
    }
}