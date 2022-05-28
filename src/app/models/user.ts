import { UserStatistic } from "./user-statistic";

type Nullable<T> = T | null;
export class User{
    idUser: number;
    userStatistics: {
        idUserStatistics?: number;
        triviasPlayed: Nullable<number>;
        triviasWon: Nullable<number>;
        concertsOrchestrated: Nullable<number>;
        orchestrationAccuracy: Nullable<number>;
        status: Nullable<number>;
    };
    nickname: Nullable<string>;
    password: Nullable<string>;
    firstname: Nullable<string>;
    lastname: Nullable<string>;
    mail: Nullable<string>;
    birthDate: Nullable<Date>;
    coinsOwned: Nullable<number>;
    status: Nullable<number>;
    role: Nullable<string>;
    showTutorials: Nullable<boolean>
    
    constructor() {
        this.idUser = 0;
        this.userStatistics = new UserStatistic;
        this.nickname = '';
        this.password = '';
        this.firstname = '';
        this.lastname = '';
        this.mail = '';
        this.birthDate = new Date;
        this.coinsOwned = 0;
        this.status = 0;
        this.role = '';
        this.showTutorials = false;
    }
}