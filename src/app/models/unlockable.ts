type Nullable<T> = T | null;
export class Unlockable{
    idUnlockable?: number;
    name: Nullable<string>;
    description: Nullable<string>;
    rareness: Nullable<string>;
    unlockerType: Nullable<string>;
    unlockerValue: number;
    coinsCost: Nullable<number>;
    icon: Nullable<string>;
    status: Nullable<number>;

    constructor() {
        this.idUnlockable = 0;
        this.name = '';
        this.description = '';
        this.rareness = '';
        this.unlockerType = '';
        this.unlockerValue = 0;
        this.coinsCost = 0;
        this.icon = '';
        this.status = 0;
    }
}