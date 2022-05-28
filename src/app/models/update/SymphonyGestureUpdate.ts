type Nullable<T> = T | null;

export class SymphonyGestureUpdate{
    idSymphonyGesture?: number;
    idGesture?: number;
    idSymphony?: number;
    beginningTime: Nullable<number>;
    endingTime: Nullable<number>;
    status: Nullable<number>;

    constructor(){
        this.idSymphonyGesture = 0;
        this.idGesture = 0;
        this.idSymphony = 0;
        this.beginningTime = 0;
        this.endingTime = 0;
        this.status = 0;
    }
}