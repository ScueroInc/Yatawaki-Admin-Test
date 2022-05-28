import { UnlockableUpdate } from "./UnlockableUpdate";

type Nullable<T> = T | null;

export class SymphonyUpdate extends UnlockableUpdate{
    idComposer: Nullable<number>;
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