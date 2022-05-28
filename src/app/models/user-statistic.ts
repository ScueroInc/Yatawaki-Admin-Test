type Nullable<T> = T | null;
export class UserStatistic{
    idUserStatistics?: number;
    triviasPlayed: Nullable<number>;
    triviasWon: Nullable<number>;
    concertsOrchestrated: Nullable<number>;
    orchestrationAccuracy: Nullable<number>;
    status: Nullable<number>;
    
    constructor() {
        this.idUserStatistics = 0;
        this.triviasPlayed = 0;
        this.triviasWon = 0;
        this.concertsOrchestrated = 0;
        this.orchestrationAccuracy = 0;
        this.status = 0;
    }
}