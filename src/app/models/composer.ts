type Nullable<T> = T | null;
export class Composer{
    idComposer?:number;
    name:Nullable<string>;
    birthDate: Nullable<Date>;
    deathDate: Nullable<Date>;
    status: Nullable<number>;

    constructor() {
        this.idComposer = 0;
        this.name = '';
        this.birthDate = new Date();
        this.deathDate = new Date();
        this.status = 0;
    }
}