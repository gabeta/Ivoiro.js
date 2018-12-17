class Ivoiro {

  propertyGetter: Object;
  propertyType: string;
  property: any;

  /**
   * Constructeur de la classe prend en paramètre l'object
   * 
   * @param {object} propertyGetter 
   */
  constructor(propertyGetter: Object) {
    this.propertyGetter = propertyGetter;
    this.initialyzeProperty();
  }

  /**
   * Initialisation du composant html servant à gérer les données
   * 
   * Cette fonction sert principalement à vérifier si le composant html 
   * est récupéré par son id ou sa className ensuite elle récupère 
   * l'élement par le moyen spécifié lors de l'initialisation du composant
   */
  initialyzeProperty() {
    Object.keys(this.propertyGetter)
      .map((propertyType) => {
        let property = this.propertyGetter[propertyType];
        this.propertyType = propertyType;

        if (propertyType === 'id') {
          this.property = document.getElementById(property);
        } else {
          this.property = document.getElementsByClassName(property);
        }
      });
  }

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
  formatToCfa(separator: string, suffix: boolean = false ,symbole: string = ''): void {
    let cfaSuffix = '';

    if (suffix) {
      if (symbole != '') {
        cfaSuffix = symbole;
      } else { 
        cfaSuffix = "FCFA";
      }
    }

    if (this.propertyType == 'className'){
      for (let i = 0; i < this.property.length; i++) {
        let intValue = parseInt(this.property[i].innerText);
        let text = intValue.tostring();

        if(text.length > 3) {
          let value = this.translateNumber(text,separator);
          this.property[i].innerText = value + ' ' + cfaSuffix
        }
      }
    } else {
      let intValue = parseInt(this.property.innerText);
      let text = intValue.tostring();

      if (text.length > 3) {
        let value = this.translateNumber(text, separator);
        this.property.innerText = value + ' ' + cfaSuffix
      }
    }
  }

  /**
   * cette fonction transforme le chiffre en fonction de sa longeur 
   * 
   * @param {string} number
   * @param {string} separator
   * @param {string}
   */
   translateNumber(number: string, separator: string): string {

    let numberArray = number.split("");
    let textLength = number.length;
    let splicer = textLength % 3;
    let text = '';

    switch (splicer) {
      case 0:
        text += this.translator(numberArray,separator,0);
        break;
      case 1:
        let j = 0;

        text += numberArray[j] + separator;
        text += this.translator(numberArray, separator, 1);

        break;
      case 2:
        let j = 0;

        for (let index = 0; index < 2; index++) {
          text += numberArray[index];
        }

        text += separator;

        text += this.translator(numberArray, separator, 2);
        break;
    }

    return text;
  }

  /**
   * Permet de fair la compilation
   * 
   * @param {Array} numberArray 
   * @param {string} separator 
   * @param {Number} splicer
   * @param {string}
   */
   translator(numberArray: Array<any>, separator: string, splicer: number) : string {
    let text = '';

    for (let i = splicer; i < numberArray.length; i++) {
      let sp = "";

      if (i != splicer 
        && (this.translatorSlicer(i,splicer) % 3) == 0 
        && i < (numberArray.length - 1)) {
        sp = separator;
      }

      text += numberArray[i] + sp;
    }
    return text;
  }

  /**
   * Génère l'opérateur qui permet de savoir à quel moment mettre le separateur 
   * 
   * @param {number} i 
   * @param {number} splicer
   * @return {number}
   */
   translatorSlicer(i: number, splicer: number): number{
    let operator = 1;

    switch (splicer) {
      case 0:
        operator = i + 1;
        break;
      case 1:
        operator = i;
        break;
      case 2:
        operator = i - 1
        break;
    }

    return operator;
  }
}
