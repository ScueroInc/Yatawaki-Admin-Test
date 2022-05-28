type Nullable<T> = T | null;
export class Instrument{
    idInstrument?:number;
    name:Nullable<string>;
    longDescription:Nullable<string>;
    shortDescription:Nullable<string>;
    type:Nullable<string>;
    status:Nullable<number>;
    icon:Nullable<string>

    constructor() {
        this.idInstrument = 0;
        this.name = '';
        this.longDescription ='';
        this.shortDescription ='';
        this.type = '';
        this.status = 0;
        this.icon = '';
    }
}