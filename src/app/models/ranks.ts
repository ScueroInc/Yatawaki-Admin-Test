type Nullable<T> = T | null;
export class Rank{
    
    idRank: number;
    name: Nullable<string>;
    level: Nullable<number>;
    maxExperience: Nullable<number>;
    status: Nullable<number>;

    constructor() {
        this.idRank = 0;
        this.name = '';
        this.level = 0;
        this.maxExperience = 0;
        this.status = 0;
    }

}