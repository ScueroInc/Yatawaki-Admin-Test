import { Gesture } from "./gesture";
import { Symphony } from "./symphony";

type Nullable<T> = T | null;

export class SymphonyGesture{
    idSymphonyGesture?: number;
    gesture: {
        idGesture?: number;
        name:Nullable<string>;
        description:Nullable<string>;
        status:Nullable<number>;
    };
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
    beginningTime: Nullable<number>;
    endingTime: Nullable<number>;
    status: Nullable<number>;

    constructor(){
        this.idSymphonyGesture = 0;
        this.gesture = new Gesture;
        this.symphony = new Symphony;
        this.beginningTime = 0;
        this.endingTime = 0;
        this.status = 0;
    }
}