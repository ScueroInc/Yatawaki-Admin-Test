import { Instrument } from "./instrument";
import { Symphony } from "./symphony";

type Nullable<T> = T | null;

export class SymphonyInstrument{
    idSymphonyInstrument?: number;
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
    instrument: {
        idInstrument?:number;
        name:Nullable<string>;
        longDescription:Nullable<string>;
        shortDescription:Nullable<string>;
        type:Nullable<string>;
        status:Nullable<number>;
        icon:Nullable<string>
    };
    track: Nullable<string>;
    position: Nullable<string>;
    status: Nullable<number>;

    constructor(){
        this.idSymphonyInstrument = 0;
        this.symphony = new Symphony;
        this.instrument = new Instrument;
        this.track = '';
        this.position = '';
        this.status = 0;
    }
}