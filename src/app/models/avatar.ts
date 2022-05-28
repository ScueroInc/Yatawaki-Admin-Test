type Nullable<T> = T | null;
export class Avatar {
    idUnlockable?: number;
    name: Nullable<string>;
    description: Nullable<string>;
    rareness: Nullable<string>;
    unlockerType: Nullable<string>;
    unlockerValue: Nullable<number>;
    coinsCost: Nullable<number>;
    icon: Nullable<string>;
    status: Nullable<number>;
    enhancedFeaturesJson: Nullable<string>

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
        this.enhancedFeaturesJson = '';
    }
}