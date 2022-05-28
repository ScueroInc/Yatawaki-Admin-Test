type Nullable<T> = T | null;

export class SymphonyGestureCreate{
    idGesture?: number;
    idSymphony?: number;
    beginningTime: Nullable<number>;
    endingTime: Nullable<number>;

    constructor(){
        this.idGesture = 0;
        this.idSymphony = 0;
        this.beginningTime = 0;
        this.endingTime = 0;
    }
}