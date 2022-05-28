import {Composer} from './composer'
type Nullable<T> = T | null;
export class Symphony{
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

    constructor(){
        this.idUnlockable = 0;
        this.name = '';
        this.description = '';
        this.rareness = '';
        this.unlockerType = '';
        this.unlockerValue = 0;
        this.coinsCost = 0;
        this.icon = '';
        this.status = 0;
        this.composer = new Composer;
        this.year = 0;
        this.duration = 0;
        this.type = '';
        this.previewTrack = '';
        this.initialBpm = 0
    }
}