declare class Ivoiro {
    propertyGetter: Object;
    propertyName: string;
    property: any;
    /**
     * Constructeur de la classe prend en paramètre l'object
     *
     * @param {object} propertyGetter
     */
    constructor(propertyGetter: Object);
    /**
     * Initialisation du composant html servant à gérer les données
     *
     * Cette fonction sert principalement à vérifier si le composant html
     * est récupéré par son id ou sa className ensuite elle récupère
     * l'élement par le moyen spécifié lors de l'initialisation du composant
     */
    initialyzeProperty(): void;
    /**
     * Formattage des valeurs en CFA
     *
     * Cette fonction sert principalement à formatter un chiffre
     * AU format CFA
     *
     * @param {string} separator
     * @param {boolean} suffix
     * @param {string} symbole
     * @return {void}
     */
    formatToCfa(separator: string, suffix?: boolean, symbole?: string): void;
    /**
     * Transforme le chiffre en fonction de sa longeur
     *
     * @param {string} number
     * @param {string} separator
     * @param {string}
     */
    translatenumber(number: string, separator: string): string;
    /**
     * Permet de fair la compilation
     *
     * @param {Array} numberArray
     * @param {string} separator
     * @param {number} splicer
     * @param {string}
     */
    translator(numberArray: Array<any>, separator: string, splicer: number): string;
    /**
     * Génère l'opérateur qui permet de savoir à quel moment mettre le separateur
     *
     * @param {number} i
     * @param {number} splicer
     * @return {number}
     */
    translatorSlicer(i: number, splicer: number): number;
}
