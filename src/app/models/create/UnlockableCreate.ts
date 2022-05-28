type Nullable<T> = T | null;

export class UnlockableCreate {
    name: Nullable<string>
    description: Nullable<string>
    rareness: Nullable<string>
    unlockerType: Nullable<string>
    unlockerValue: Nullable<number>;
    icon: Nullable<string>;
    coinsCost: Nullable<number>;
    constructor(){
        this.name = '';
        this.description = '';
        this.rareness = '';
        this.unlockerType = '';
        this.unlockerValue = 0;
        this.icon= '';
        this.coinsCost = 0;
    }
}