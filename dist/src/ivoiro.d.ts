declare class Ivoiro {
    propertyGetter: Object;
    propertyType: String;
    property: any;
    constructor(propertyGetter: Object);
    /**
     * Initialisation du composant html servant à gérer les données
     *
     * Cette fonction sert principalement à vérifie si le composant html
     * est récupérer par son id ou sa className ensuite elle récupère
     * l'élement par le moyen spécifié lors de l'initialisation du composant
     */
    initialyzeProperty(): void;
    /**
    * Formattage des valeurs en CFA
    *
    * Cette fonction sert principalement à formatter un chiffre
    * AU format CFA
    */
    formatToCfa(separator: string, suffix?: boolean, symbole?: string): void;
    translateNumber(number: string, separator: string): String;
    translator(numberArray: Array<any>, separator: string, splicer: number): string;
    translatorSlicer(i: number, splicer: number): number;
}
