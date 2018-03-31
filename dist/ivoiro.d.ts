declare class Ivoiro {
    propertyGetter: Object;
    propertyType: String;
    property: any;
    constructor(propertyGetter: Object);
    initialyzeProperty(): void;
    formatToCfa(separator: String, prefix: false): String;
}
