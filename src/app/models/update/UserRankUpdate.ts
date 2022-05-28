type Nullable<T> = T | null;

export class UserRankUpdate{
    idUserRank?: number;
    idUser?: number;
    idRank?: number;
    startDate: Nullable<Date>;
    endDate: Nullable<Date>;
    currentExperience: Nullable<number>;
    status: Nullable<number>;

    constructor(){
        this.idUserRank = 0;
        this.idUser = 0;
        this.idRank = 0;
        this.startDate = new Date;
        this.endDate = new Date;
        this.currentExperience = 0;
        this.status = 0;
    }
}