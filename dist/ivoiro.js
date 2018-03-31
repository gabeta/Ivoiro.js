"use strict";
var Ivoiro = /** @class */ (function () {
    function Ivoiro(propertyGetter) {
        this.propertyGetter = propertyGetter;
        this.initialyzeProperty();
        console.log(this.property);
    }
    Ivoiro.prototype.initialyzeProperty = function () {
        var _this = this;
        Object.keys(this.propertyGetter)
            .map(function (propertyType) {
            var property = _this.propertyGetter[propertyType];
            if (propertyType === 'idName') {
                _this.property = document.getElementById(property);
            }
            else {
                _this.property = document.getElementsByClassName(property);
            }
        });
    };
    Ivoiro.prototype.formatToCfa = function (separator, prefix) {
        for (var i = 0; i < this.property.length; i++) {
            var text = this.property[i].innerText;
            if (text.length > 3) {
                var value = this.translateNumber(text, separator);
                this.property[i].innerText = value;
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
                for (var i = 0; i < number.length; i++) {
                    var sp = "";
                    if (i != 0 && ((i + 1) % 3) == 0 && i < (number.length - 1)) {
                        sp = separator;
                    }
                    text += numberArray[i] + sp;
                }
                console.log(text);
                break;
            case 1:
                break;
            case 2:
                break;
            default:
        }
        return text;
    };
    return Ivoiro;
}());
