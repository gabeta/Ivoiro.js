
class Ivoiro {

    propertyGetter: Object;
    propertyType: String;
    property: any;

    constructor(propertyGetter: Object) {
        this.propertyGetter = propertyGetter;
        this.initialyzeProperty();
        console.log(this.property)
    }

    /**
     * Initialisation du composant html servant à gérer les données
     * 
     * Cette fonction sert principalement à vérifie si le composant html 
     * est récupérer par son id ou sa className ensuite elle récupère 
     * l'élement par le moyen spécifié lors de l'initialisation du composant
     */
    initialyzeProperty() {
        Object.keys(this.propertyGetter)
            .map((propertyType) => {
                let property = this.propertyGetter[propertyType];
                if (propertyType === 'idName') {
                    this.property = document.getElementById(property);
                }else{
                    this.property = document.getElementsByClassName(property);
                }

            })
    }

    formatToCfa(separator: string, prefix: Boolean): void{
        
        for (var i = 0; i < this.property.length; i++) {
            var intValue = parseInt(this.property[i].innerText);
            var text = intValue.toString();
            if(text.length > 3) {
                let value = this.translateNumber(text,separator);
                this.property[i].innerText = value
            }
        }

    }

    translateNumber(number: string, separator: string): String{
        
        let numberArray = number.split("");
        let textLength = number.length;
        let splicer = textLength % 3;
        let text = '';

        switch (splicer) {
            case 0:
                text += this.translator(numberArray,separator,0);
                break;
            case 1:
                var j = 0;
                text += numberArray[j] + separator
                text += this.translator(numberArray, separator, 1);
                break;
            case 2:
                var j = 0;
                for (var index = 0; index < 2; index++) {
                    text += numberArray[index]
                }
                text += separator

                text += this.translator(numberArray, separator, 2);
                break;
            default:
                
        }

        return text;
    }

    translator(numberArray: Array<any>, separator: string, splicer: number) : string {
        let text = '';

        for (var i = splicer; i < numberArray.length; i++) {
            var sp = ""
            if (i != splicer && ( this.translatorSlicer(i,splicer) % 3 ) == 0 && i < (numberArray.length - 1)) {
                sp = separator
            }
            text += numberArray[i] + sp
        }
        return text;
    }

    translatorSlicer(i: number, splicer: number): number{
        var operator = 1;
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