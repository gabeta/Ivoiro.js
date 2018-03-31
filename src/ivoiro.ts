
class Ivoiro {

    propertyGetter: Object;
    propertyType: String;
    property: any;

    constructor(propertyGetter: Object) {
        this.propertyGetter = propertyGetter;
        this.initialyzeProperty();
        console.log(this.property)
    }

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
            let text = this.property[i].innerText;
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
                for (let i = 0; i < number.length; i++){
                    let sp = ""
                    if (i != 0 && ((i + 1) % 3) == 0 && i < (number.length - 1)) {
                        sp = separator
                    }
                    text += numberArray[i] + sp
                }
                console.log(text)
                break;
            case 1:

                break;
            case 2:

                break;
            default:
                
        }

        return text;
    }

    
}