import { UnlockableCreate } from "./UnlockableCreate";

type Nullable<T> = T | null;

export class SymphonyCreate extends UnlockableCreate{
    idComposer?: number;
    year: Nullable<number>;
    duration: Nullable<number>;
    type: Nullable<string>;
    previewTrack: Nullable<string>;
    initialBpm: Nullable<number>;

    constructor(){
        super();
        this.idComposer = 0;
        this.year = 0;
        this.duration = 0;
        this.type = '';
        this.previewTrack = '';
        this.initialBpm = 0;
    }
}