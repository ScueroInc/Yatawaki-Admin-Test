type Nullable<T> = T | null;
export class Gesture{
    idGesture?: number;
    name:Nullable<string>;
    description:Nullable<string>;
    status:Nullable<number>;

    constructor() {
        this.idGesture = 0;
        this.name = '';
        this.description ='';
        this.status = 0;
    }
}