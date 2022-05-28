
type Nullable<T> = T | null;

export class SymphonyInstrumentCreate{
    idSymphony?: number;
    idInstrument?: number;
    track: Nullable<string>;
    position: Nullable<string>;

    constructor(){
        this.idSymphony = 0;
        this.idInstrument = 0;
        this.track = '';
        this.position = '';
    }
}