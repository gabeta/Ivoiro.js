declare class Ivoiro {
    propertyGetter: Object;
    propertyType: String;
    property: any;
    constructor(propertyGetter: Object);
    initialyzeProperty(): void;
    formatToCfa(separator: string, prefix: Boolean): void;
    translateNumber(number: string, separator: string): String;
}
