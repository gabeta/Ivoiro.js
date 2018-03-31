
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

    formatToCfa(separator: String, prefix: false): String{
        
        return '';
    }

    
}