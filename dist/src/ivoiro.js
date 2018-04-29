"use strict";
var Ivoiro = /** @class */ (function () {
    function Ivoiro(propertyGetter) {
        this.propertyGetter = propertyGetter;
        this.initialyzeProperty();
    }
    /**
     * Initialisation du composant html servant à gérer les données
     *
     * Cette fonction sert principalement à vérifie si le composant html
     * est récupérer par son id ou sa className ensuite elle récupère
     * l'élement par le moyen spécifié lors de l'initialisation du composant
     */
    Ivoiro.prototype.initialyzeProperty = function () {
        var _this = this;
        Object.keys(this.propertyGetter)
            .map(function (propertyType) {
            var property = _this.propertyGetter[propertyType];
            _this.propertyType = propertyType;
            if (propertyType === 'id') {
                _this.property = document.getElementById(property);
            }
            else {
                _this.property = document.getElementsByClassName(property);
            }
        });
    };
    /**
    * Formattage des valeurs en CFA
    *
    * Cette fonction sert principalement à formatter un chiffre
    * AU format CFA
    */
    Ivoiro.prototype.formatToCfa = function (separator, suffix, symbole) {
        if (suffix === void 0) { suffix = false; }
        if (symbole === void 0) { symbole = ''; }
        var cfaSuffix = '';
        if (suffix) {
            if (symbole != '') {
                cfaSuffix = symbole;
            }
            else {
                cfaSuffix = "FCFA";
            }
        }
        if (this.propertyType == 'className') {
            for (var i = 0; i < this.property.length; i++) {
                var intValue = parseInt(this.property[i].innerText);
                var text = intValue.toString();
                if (text.length > 3) {
                    var value = this.translateNumber(text, separator);
                    this.property[i].innerText = value + ' ' + cfaSuffix;
                }
            }
        }
        else {
            var intValue = parseInt(this.property.innerText);
            var text = intValue.toString();
            if (text.length > 3) {
                var value = this.translateNumber(text, separator);
                this.property.innerText = value + ' ' + cfaSuffix;
            }
        }
    };
    Ivoiro.prototype.translateNumber = function (number, separator) {
        var numberArray = number.split("");
        var textLength = number.length;
        var splicer = textLength % 3;
        var text = '';
        switch (splicer) {
            case 0:
                text += this.translator(numberArray, separator, 0);
                break;
            case 1:
                var j = 0;
                text += numberArray[j] + separator;
                text += this.translator(numberArray, separator, 1);
                break;
            case 2:
                var j = 0;
                for (var index = 0; index < 2; index++) {
                    text += numberArray[index];
                }
                text += separator;
                text += this.translator(numberArray, separator, 2);
                break;
            default:
        }
        return text;
    };
    Ivoiro.prototype.translator = function (numberArray, separator, splicer) {
        var text = '';
        for (var i = splicer; i < numberArray.length; i++) {
            var sp = "";
            if (i != splicer && (this.translatorSlicer(i, splicer) % 3) == 0 && i < (numberArray.length - 1)) {
                sp = separator;
            }
            text += numberArray[i] + sp;
        }
        return text;
    };
    Ivoiro.prototype.translatorSlicer = function (i, splicer) {
        var operator = 1;
        switch (splicer) {
            case 0:
                operator = i + 1;
                break;
            case 1:
                operator = i;
                break;
            case 2:
                operator = i - 1;
                break;
        }
        return operator;
    };
    return Ivoiro;
}());
