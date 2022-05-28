import { User } from "./user";
import { Unlockable } from "./unlockable"
type Nullable<T> = T | null;
export class UserUnlockable{
    idUserUnlockable: number;
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
    unlockable: {
        idUnlockable?: number;
        name: Nullable<string>;
        description: Nullable<string>;
        rareness: Nullable<string>;
        unlockerType: Nullable<string>;
        unlockerValue: number;
        coinsCost: Nullable<number>;
        icon: Nullable<string>;
        status: Nullable<number>;
    };
    unlockedDate: Nullable<Date>;
    status: Nullable<number>;
    constructor() {
        this.idUserUnlockable = 0;
        this.user = new User;
        this.unlockable = new Unlockable;
        this.unlockedDate = new Date;
        this.status = 0;
    }
}