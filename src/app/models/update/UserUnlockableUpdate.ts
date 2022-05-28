type Nullable<T> = T | null;

export class UserUnlockableUpdate{
    idUserUnlockable?: number;
    idUser?: number;
    idUnlockable?: number;
    unlockedDate: Nullable<Date>;
    status: Nullable<number>;

    constructor(){
        this.idUserUnlockable = 0;
        this.idUser = 0;
        this.idUnlockable = 0;
        this.unlockedDate = new Date;
        this.status = 0;
    }
}