type Nullable<T> = T | null;

export class UserRankCreate{
    idUser?: number;
    idRank?: number;

    constructor(){
        this.idUser = 0;
        this.idRank = 0;
    }
}