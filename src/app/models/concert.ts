type Nullable<T> = T | null;
import { User } from "./user";
import { Symphony } from "./symphony";
export class Concert{
     idConcert: number;
     symphony: {
        idUnlockable?: number;
        name: Nullable<string>;
        description: Nullable<string>;
        rareness: Nullable<string>;
        unlockerType: Nullable<string>;
        unlockerValue: number;
        coinsCost: Nullable<number>;
        icon: Nullable<string>;
        status: Nullable<number>;
        composer: {
            idComposer?: Nullable<number>;
            name: Nullable<string>;
            birthDate: Nullable<Date>;
            deathDate: Nullable<Date>;
            status: Nullable<number>
        };
        year: Nullable<number>;
        duration: Nullable<number>;
        type: Nullable<string>;
        previewTrack: Nullable<string>;
        initialBpm: Nullable<number>;
     };
     playedDate: Nullable<Date>;
     status: Nullable<number>;
     user:{
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
     points: Nullable<number>;
     accuracyRate: Nullable<number>;
     gesturesCompleted: Nullable<number>;

    constructor() {
        this.idConcert = 0;
        this.symphony = new Symphony;
        this.playedDate = new Date;
        this.status = 0;
        this.user = new User;
        this.points = 0;
        this.accuracyRate = 0;
        this.gesturesCompleted = 0;
    }
}