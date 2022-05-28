type Nullable<T> = T | null;

export class UserUnlockableCreate{
    idUser?: number;
    idUnlockable?: number;

    constructor(){
        this.idUser = 0;
        this.idUnlockable = 0;
    }
}