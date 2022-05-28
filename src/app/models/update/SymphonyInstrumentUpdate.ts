type Nullable<T> = T | null;

export class SymphonyInstrumentUpdate{
    idSymphonyInstrument?: number;
    idSymphony?: number;
    idInstrument?: number;
    track: Nullable<string>;
    position: Nullable<string>;
    status: Nullable<number>;

    constructor(){
        this.idSymphonyInstrument = 0;
        this.idSymphony = 0;
        this.idInstrument = 0;
        this.track = '';
        this.position = '';
        this.status = 0;
    }
}