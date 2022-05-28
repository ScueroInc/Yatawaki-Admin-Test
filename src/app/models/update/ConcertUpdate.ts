type Nullable<T> = T | null;

export class ConcertUpdate{
    idConcert?: number;
    idSymphony?: number;
    playedDate: Nullable<Date>;
    status: Nullable<number>;
    idUser?: number;
    points: Nullable<number>;
    accuracyRate: Nullable<number>;
    gesturesCompleted: Nullable<number>;

    constructor(){
        this.idConcert = 0;
        this.idSymphony = 0;
        this.playedDate = new Date;
        this.status = 0;
        this.idUser = 0;
        this.points = 0;
        this.accuracyRate = 0;
        this.gesturesCompleted = 0;
    }
}