declare class Ivoiro {
    propertyGetter: Object;
    propertyType: String;
    property: any;
    /**
     * Constructeur de la classe prend en paramètre l'object
     *
     * @param propertyGetter
     */
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
     *
     * @param separator
     * @param suffix
     * @param symbole
     */
    formatToCfa(separator: string, suffix?: boolean, symbole?: string): void;
    /**
     * cette fonction transforme le chiffre en fonction de sa longeur
     *
     * @param number
     * @param separator
     */
    translateNumber(number: string, separator: string): String;
    /**
     *
     * @param numberArray
     * @param separator
     * @param splicer
     */
    translator(numberArray: Array<any>, separator: string, splicer: number): string;
    /**
     * Cette fonction génère l'opérateur qui permet de savoir à quel moment
     * mettre le separateur
     *
     * @param i
     * @param splicer
     */
    translatorSlicer(i: number, splicer: number): number;
}
