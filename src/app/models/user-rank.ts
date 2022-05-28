import { User } from "./user";
import { Rank } from "./ranks"
type Nullable<T> = T | null;
export class UserRank {
    idUserRank: number;
    user: {
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
    };
    rank: {
        idRank: number;
        name: Nullable<string>;
        level: Nullable<number>;
        maxExperience: Nullable<number>;
        status: Nullable<number>;
    };
    startDate: Nullable<Date>;
    endDate: Nullable<Date>;
    currentExperience: Nullable<number>;
    status: Nullable<number>;
    constructor() {
        this.idUserRank = 0;
        this.user = new User;
        this.rank = new Rank;
        this.startDate = new Date;
        this.endDate = new Date;
        this.currentExperience = 0;
        this.status = 0;
    }
}